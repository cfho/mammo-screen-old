import { HttpErrorResponse } from "@angular/common/http";
import { Injectable, OnDestroy } from "@angular/core";
import {
  Auth,
  User,
  authState,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  user,
} from "@angular/fire/auth";
import { customClaims } from "@angular/fire/auth-guard";
import { doc, docData, Firestore, setDoc } from "@angular/fire/firestore";
import { getMatIconNameNotFoundError } from "@angular/material/icon";
import {
  BehaviorSubject,
  EMPTY,
  firstValueFrom,
  lastValueFrom,
  Observable,
  Subject,
  throwError,
} from "rxjs";
import { map, retry, switchMap, take, tap } from "rxjs/operators";
import { LoginData } from "../app/interfaces/login-data.interface";
import { DocUser, Roles } from "../app/interfaces/user.interface";

@Injectable({
  providedIn: "root",
})
export class AuthService implements OnDestroy {
  private destroy$ = new Subject();
  public readonly user: Observable<User | null> = EMPTY;
  user$: Observable<DocUser | null>;
  displayName: string | null;

  userDocUid: string;
  currentUser: User | null = null;
  private authStatusSub = new BehaviorSubject(this.currentUser);
  currentAuthStatus$ = this.authStatusSub.asObservable();

  showLoginButton = false;
  showLogoutButton = false;

  constructor(private auth: Auth, private firestore: Firestore) {
    this.authStatusListener();
    user(this.auth).subscribe((response) => {
      if (response) {
        this.displayName = response.displayName;
      }
      console.log(response);
    });
  }

  authStatusListener() {
    this.auth.onAuthStateChanged((credential) => {
      if (credential) {
        this.userDocUid = credential.uid;
        this.authStatusSub.next(credential);
        // console.log(credential);
        console.log("User is logged in");
      } else {
        this.authStatusSub.next(null);
        console.log("User is logged out");
      }
    });
  }

  login({ email, password }: LoginData) {
    return signInWithEmailAndPassword(this.auth, email, password)
      .then((res) => console.log("User logged in!"))
      .catch(this.handleError);
    // .catch((err) => console.log(err.code));
  }

  loginWithGoogle() {
    return signInWithPopup(this.auth, new GoogleAuthProvider())
      .then((res) => {
        this.SetUserData();
        // .pipe(take(1))
        // .subscribe((res) => console.log("Google account is logged in!"));
      })
      .catch(this.handleError);
  }

  async register({ email, password, name }: LoginData) {
    const credential = await createUserWithEmailAndPassword(
      this.auth,
      email,
      password
    );
    const user = credential.user;
    await updateProfile(user, { displayName: name });
    this.SetUserData();
  }

  logout() {
    return signOut(this.auth)
      .then((res) => console.log("User logout!"))
      .catch((err) => console.log("create user profile!"));
  }

  getUser() {
    return this.currentAuthStatus$.pipe(
      map((user: User) =>
        user.uid && user.displayName && user.email
          ? user.uid
          : throwError(() => new Error("no user data"))
      ),
      retry(),
      switchMap((uid) => {
        const docRef = doc(this.firestore, `users/${uid}`);
        return docData(docRef);
      })
    );
  }

  async SetUserData() {
    let userData: DocUser;
    await firstValueFrom(
      user(this.auth).pipe(
        map((user) => {
          userData = {
            displayName: user.displayName,
            email: user.email,
            uid: user.uid,
            roles: {
              admin: false,
              editor: false,
              subscriber: true,
            },
          };
        })
      )
    )

    const docRef = doc(this.firestore, `users/${userData.uid}`);
    setDoc(docRef, userData, { merge: true }).then(() => {
      console.log("save user OK!");
    });
  }

  ///// Error Handling //////
  private handleError(errorRes) {
    console.log(errorRes.code);
    let errorMessage = "An unknown error occurred!";
    // if (true) {
    //   return throwError(() => new Error("💥Other error message!"));
    // }
    switch (errorRes.code) {
      case "auth/email-already-in-use":
        errorMessage = "💥這個 email 已經登記，請直接登入!💥";
        break;
      case "auth/weak-password":
        errorMessage = "💥請輸入最少六個字元的密碼!💥";
        break;
      case "auth/user-not-found":
        errorMessage = "💥這個 email 沒有登記！請先注冊。💥";
        break;
      case "auth/wrong-password":
        errorMessage = "💥密碼錯誤，請再試一次！💥";
        break;
      case "auth/too-many-requests":
        errorMessage = "💥請稍等一下再登入！💥";
        break;
    }
    console.log(errorMessage);
    throw new Error(errorMessage);
  }

  ///// Role-based Authorization //////
  canRead(user: DocUser): boolean {
    const allowed = ["admin", "editor", "subscriber"];
    return this.checkAuthorization(user, allowed);
  }

  canEdit(user: DocUser): boolean {
    const allowed = ["admin", "editor"];
    return this.checkAuthorization(user, allowed);
  }

  canDelete(user: DocUser): boolean {
    const allowed = ["admin"];
    return this.checkAuthorization(user, allowed);
  }

  // determines if user has matching role
  private checkAuthorization(user: DocUser, allowedRoles: string[]): boolean {
    if (!user) return false;
    for (const role of allowedRoles) {
      if (user.roles![role]) {
        return true;
      }
    }
    return false;
  }

  ngOnDestroy() {
    // when the component get's destroyed, pass something to the
    // destroy$ ReplaySubject
    this.destroy$.next(true);
    console.log("💥Destroyed");
  }
}
