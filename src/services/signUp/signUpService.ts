import { getRequest, IDefaultResponse } from "../default";
import { CREATE_PARENT_ACCOUNT } from "../CONSTANTS";

const request = getRequest();

export const createParentAccount = async (): Promise<
  IDefaultResponse | undefined
> => {
  try {
    const res = await request.post<IDefaultResponse>(CREATE_PARENT_ACCOUNT());

    return res.data;
  } catch (error) {
    throw error;
  }
};
