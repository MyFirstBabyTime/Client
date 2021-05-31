import { getRequest, IDefaultResponse } from '../default';
import { REGISTER_CHILDREN } from '../CONSTANTS';
import { IRegisterChildrenForm } from './payload';

const request = getRequest();

export const registerChildren = async (
  data: IRegisterChildrenForm,
  parentUuid: string,
): Promise<IDefaultResponse | undefined> => {
  try {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('birth', data.birth);
    formData.append('sex', data.sex);
    if(data.profile) formData.append('profile', data.profile);

    const res = await request.post<IDefaultResponse>(
      REGISTER_CHILDREN(parentUuid),
      formData,
      {
        headers: {
          Authorization: localStorage.getItem('token'),
        }
      }
    );

    return res.data;
  } catch (error) {
    throw error;
  }
}