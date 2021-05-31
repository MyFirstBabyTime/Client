import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { RegisterChildrenContext } from '../../../../contexts/RegisterChildrenContext';
import { useRegisterChildrenInfo } from '../../../domain/useRegisterChildren/useRegisterChildrenInfo';

const useRegisterChildrenInfoUseCase = () => {
  const history = useHistory();
  const {
    state: { registerChildrenForm },
    setState: { setRegisterChildrenForm },
  } = useRegisterChildrenInfo();
  const registerChildrenContext = useContext(RegisterChildrenContext);

  const onClickNextBtnUseCase = () => {
    if(registerChildrenForm.childName) {
      registerChildrenContext.setContextChildName(registerChildrenForm.childName);
      registerChildrenContext.setContextChildBirth(registerChildrenForm.childBirth);
      registerChildrenContext.setContextChildSex(registerChildrenForm.childSex);
      registerChildrenContext.onIncreasePageNum();
    } else history.push('/main');
  }

  return {
    state: { registerChildrenForm },
    setState: { setRegisterChildrenForm },
    useCase: { onClickNextBtnUseCase }
  };
};

export default useRegisterChildrenInfoUseCase;