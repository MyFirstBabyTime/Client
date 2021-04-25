import { getRequest } from "../default";
import { SIGN_IN } from "../CONSTANTS";
import { ISignInForm, ResponseSignIn } from "./payload";

const request = getRequest();

export const signIn = async (
  data: ISignInForm
): Promise<ResponseSignIn | undefined> => {
  try {
    const res = await request.post<ResponseSignIn>(SIGN_IN(), {
      id: data.id,
      pw: data.pw,
    });

    return res.data;
  } catch (error) {
    throw error;
  }
};
