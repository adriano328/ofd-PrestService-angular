import { IUser } from './IUser';
export interface ITokenResetPassword {
  id: number;
  token: string;
  createdDate: string;
  user: IUser
}
