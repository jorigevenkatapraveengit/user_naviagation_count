
export enum Role {
  ADMIN = 'admin',
  MEMBER = 'member',
}
export interface LoginInfo { 
  username: string;
  password: string;
}

export interface User extends LoginInfo {
  name: string;
  role: Role;
}

export const users: User[] = [
  {
    name: 'admin',
    role: Role.ADMIN,
    password: 'admin@', 
    username: 'admin@',
  },
  {
    name: 'admin',
    role: Role.ADMIN,
    password: 'admin1@87651234',
    username: 'admin1@localhost',
  },
  {
    name: 'user2',
    role: Role.MEMBER,
    password: 'user1@12345678',
    username: 'user1@localhost',
  },
  {
    name: 'user2',
    role: Role.MEMBER,
    password: 'user2@12345678',
    username: 'user2@localhost',
  },
];

export enum StorageKeys {
  USERS = 'USERS',
  USER_NAVIGATION_TABS_LIST = 'USER_NAVIGATION_TABS_LIST',
  LOGIN_SUCCESS_USER  = 'LOGIN_SUCCESS_USER',
  USER_NAVIGATION_COUNT = 'USER_NAVIGATION_COUNT'
}

export interface UserData {
  [key : string]: UserTabCount;
}

export type UserTabCount = {
  [ key : string ]: number;
};
