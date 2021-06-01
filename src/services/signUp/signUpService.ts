import { getRequest, IDefaultResponse } from "../default";
import {
  SIGN_UP_SEND_CERTIFY_CODE,
  SIGN_UP_GET_CERTIFICATION,
  SIGN_UP_CREATE_PARENT_ACCOUNT,
  SIGN_UP_CHECK_ID_DUPLICATION,
} from "../CONSTANTS";
import { IParentAccountForm, IValidationData } from "./payload";

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

export const checkIdDuplication = async (
  id: string
): Promise<IDefaultResponse | undefined> => {
  try {
    const res = await request.get<IDefaultResponse>(
      SIGN_UP_CHECK_ID_DUPLICATION(id)
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
    const formData = new FormData();
    formData.append("id", form.id);
    formData.append("pw", form.pw);
    formData.append("name", form.name);
    formData.append("phone_number", form.phoneNumber);
    if (form.profile) formData.append("profile", form.profile);

    const res = await request.post<IDefaultResponse>(
      SIGN_UP_CREATE_PARENT_ACCOUNT(),
      formData
    );

    return res.data;
  } catch (error) {
    throw error;
  }
};
