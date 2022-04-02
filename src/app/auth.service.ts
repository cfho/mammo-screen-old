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
  
  
} from "@angular/fire/auth";
import { customClaims } from "@angular/fire/auth-guard";
import { doc, docData, Firestore, setDoc } from "@angular/fire/firestore";
import { BehaviorSubject, EMPTY, firstValueFrom, lastValueFrom, Observable, Subject, throwError } from "rxjs";
import { map, retry, switchMap, tap } from "rxjs/operators";
import { LoginData } from "../app/interfaces/login-data.interface";
import { DocUser, Roles } from "../app/interfaces/user.interface";

@Injectable({
  providedIn: "root",
})
export class AuthService implements OnDestroy {
  private destroy$ = new Subject();
  public readonly user: Observable<User | null> = EMPTY;
  user$: Observable<DocUser | null>;

  userDocUid: string;
  currentUser: User | null = null;
  private authStatusSub = new BehaviorSubject(this.currentUser);
  currentAuthStatus$ = this.authStatusSub.asObservable();

  showLoginButton = false;
  showLogoutButton = false;

  constructor(private auth: Auth, private firestore: Firestore) {
    this.authStatusListener();
  }

  authStatusListener() {
    this.auth.onAuthStateChanged((credential) => {
      if (credential) {
        this.userDocUid = credential.uid;
        this.authStatusSub.next(credential);
        console.log(credential)
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
      .catch((err) => console.log(err));
  }

  loginWithGoogle() {
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }

  register({ email, password, name }: LoginData) {
    return createUserWithEmailAndPassword(this.auth, email, password)
      .then((res) => {
        updateProfile(res.user, { displayName: name });
        console.log("User registered!");
      })
      .catch((err) => console.log(err));
  }

  logout() {
    return signOut(this.auth)
      .then((res) => console.log("User logout!"))
      .catch((err) => console.log(err));
  }

  getUser() {
    return this.currentAuthStatus$.pipe(
      map((user: User) => user? user.uid : throwError(() => new Error('no user data'))),
      retry(),
      switchMap((uid) => {
          const docRef = doc(this.firestore, `users/${uid}`);
          return docData(docRef);
      })
    );
  }

  SetUserData(user: LoginData) {
    const uid = this.auth.currentUser?.uid;
    const userData = {
      displayName: user.name,
      email: user.email,
      uid: uid,
      roles: {
        admin: false,
        editor: false,
        subscriber: true,
      },
    };
    const docRef = doc(this.firestore, `users/${uid}`);
    setDoc(docRef, userData, { merge: true });
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
