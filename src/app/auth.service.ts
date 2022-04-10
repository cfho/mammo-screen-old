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
import { doc, docData, Firestore, setDoc } from "@angular/fire/firestore";
import {
  BehaviorSubject,
  EMPTY,
  firstValueFrom,
  Observable,
  Subject,
  throwError,
} from "rxjs";
import { map } from "rxjs/operators";
import { LoginData } from "../app/interfaces/login-data.interface";
import { DocUser, Roles } from "../app/interfaces/user.interface";

@Injectable({
  providedIn: "root",
})
export class AuthService implements OnDestroy {
  private destroy$ = new Subject();
  public readonly user: Observable<User | null> = EMPTY;

  currentUser: User | null = null;
  private authStatusSub = new BehaviorSubject(this.currentUser);
  currentAuthStatus$ = this.authStatusSub.asObservable();

  constructor(private auth: Auth, private firestore: Firestore) {
    this.authStatusListener();
  }

  authStatusListener() {
    this.auth.onAuthStateChanged((credential) => {
      if (credential) {
        this.authStatusSub.next(credential);
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
  }

  async loginWithGoogle() {
    await signInWithPopup(this.auth, new GoogleAuthProvider()).catch(
      this.handleError
    );
    let hasUserData: boolean;
    await this.getRoleBasedData().then((res) => {
      hasUserData = !!res;
    });
    console.log(hasUserData);
    if (!hasUserData) {
      await this.SetUserData();
    } else {
      console.log("Google account already saved!");
    }
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
    return signOut(this.auth).then((res) => console.log("User logout!"));
  }

  private async getRoleBasedData() {
    const uid = await firstValueFrom(
      user(this.auth).pipe(map((user) => user.uid))
    );
    const docRef = doc(this.firestore, `users/${uid}`);
    return await firstValueFrom(docData(docRef));
  }

  private async SetUserData() {
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
    );

    const docRef = doc(this.firestore, `users/${userData.uid}`);
    setDoc(docRef, userData, { merge: true }).then(() => {
      console.log("save user data to Firestore OK!");
    });
  }

  ///// Error Handling //////
  private handleError(errorRes) {
    console.log(errorRes.code);
    let errorMessage = "An unknown error occurred!";
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
