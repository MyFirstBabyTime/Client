import { IDefaultResponse } from "../../default";

export interface ISignInForm {
  id: string;
  pw: string;
}

export interface ResponseSignIn extends IDefaultResponse {
  uuid: string;
  token: string;
}
