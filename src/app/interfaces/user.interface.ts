export interface Roles { 
  subscriber?: boolean;
  editor?: boolean;
  admin?: boolean;
}

export interface DocUser {
  uid: string;
  email: string;
  displayName?: string;
  roles?: Roles;
  photoURL?: string;
  emailVerified?: boolean;
}



