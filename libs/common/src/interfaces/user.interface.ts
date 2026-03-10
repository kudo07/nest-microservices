export interface IUser {
  id: string;
  email: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface IAuthUser extends Pick<IUser, 'id' | 'email'> {
  roles: string[];
}
