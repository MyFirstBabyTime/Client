import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { RegisterChildrenContext } from '../../../../contexts/RegisterChildrenContext';
import { registerChildren } from '../../../../services/registerChildren/registerChildrenService';
import { useRegisterChildrenProfile } from '../../../domain/useRegisterChildren/useRegisterChildrenProfile';

const useRegisterChildrenProfileUseCase = () => {
  const history = useHistory();
  const {
    state: { registerChildrenProfile },
    setState: { setRegisterChildrenProfile }
  } = useRegisterChildrenProfile();
  const registerChildrenContext = useContext(RegisterChildrenContext);

  const createChildUseCase = () => {
    registerChildren({
      name: registerChildrenContext.contextChildName,
      birth: registerChildrenContext.contextChildBirth,
      sex: registerChildrenContext.contextChildSex,
      profile: registerChildrenProfile
    }, localStorage.getItem("uuid") ?? "").then(
      (res) => {
        history.push('/main');
        Promise.resolve(res);
      },
      (err) => {
        switch(err.response.status) {
          case 400:
            alert('유효하지 않은 요청입니다.');
            break;
          case 404:
            alert('존재하지 않는 계정입니다.');
            break;
          default:
            break;
        }
        Promise.reject(err);
      }
    )
  }

  return {
    state: { registerChildrenProfile },
    setState: { setRegisterChildrenProfile },
    useCase: { createChildUseCase }
  };
};

export default useRegisterChildrenProfileUseCase;