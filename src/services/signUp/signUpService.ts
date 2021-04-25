import { getRequest, IDefaultResponse } from "../default";
import {
  SIGN_UP_SEND_CERTIFY_CODE,
  SIGN_UP_GET_CERTIFICATION,
  SIGN_UP_CREATE_PARENT_ACCOUNT,
} from "../CONSTANTS";
import { IParentAccountForm } from "./payload";
import { IValidationData } from "../../hooks/domain/useSignUp/useSignUpValidation/payload";

const request = getRequest();

export const sendCertifyCode = async (
  phoneNumber: string
): Promise<IDefaultResponse | undefined> => {
  try {
    const res = await request.post<IDefaultResponse>(
      SIGN_UP_SEND_CERTIFY_CODE(phoneNumber)
    );

    return res.data;
  } catch (error) {
    throw error;
  }
};

export const getCertification = async (
  data: IValidationData
): Promise<IDefaultResponse | undefined> => {
  try {
    const res = await request.post<IDefaultResponse>(
      SIGN_UP_GET_CERTIFICATION(data.phoneNumber),
      {
        certify_code: parseInt(data.certifyCode),
      }
    );

    return res.data;
  } catch (error) {
    throw error;
  }
};

export const createParentAccount = async (
  form: IParentAccountForm
): Promise<IDefaultResponse | undefined> => {
  try {
    const res = await request.post<IDefaultResponse>(
      SIGN_UP_CREATE_PARENT_ACCOUNT(),
      {
        id: form.id,
        pw: form.pw,
        name: form.name,
        phone_number: form.phoneNumber,
      }
    );

    return res.data;
  } catch (error) {
    throw error;
  }
};
