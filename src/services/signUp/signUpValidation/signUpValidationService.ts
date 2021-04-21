import { getRequest, IDefaultResponse } from "../../default";
import {
  SEND_CERTIFY_CODE,
  GET_CERTIFICATION,
  CREATE_PARENT_ACCOUNT,
} from "../../CONSTANTS";
import { ParentAccountForm } from "./payload";
import { IValidationData } from "../../../hooks/domain/useSignUp/useSignUpValidation/payload";

const request = getRequest();

export const sendCertifyCode = async (
  phoneNumber: string
): Promise<IDefaultResponse | undefined> => {
  try {
    const res = await request.post<IDefaultResponse>(
      SEND_CERTIFY_CODE(phoneNumber)
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
      GET_CERTIFICATION(data.phoneNumber),
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
  form: ParentAccountForm
): Promise<IDefaultResponse | undefined> => {
  try {
    const res = await request.post<IDefaultResponse>(CREATE_PARENT_ACCOUNT(), {
      id: form.id,
      pw: form.pw,
      name: form.name,
      phone_number: form.phoneNumber,
    });

    return res.data;
  } catch (error) {
    throw error;
  }
};
