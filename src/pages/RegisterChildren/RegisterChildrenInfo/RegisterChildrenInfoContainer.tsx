import { ChangeEvent, FC } from "react";
import { RegisterChildrenInfoView } from "./RegisterChildrenInfoView";
import useRegisterChildrenInfoUseCase from '../../../hooks/useCase/useRegisterChildrenUseCase/useRegisterChildrenInfoUseCase/index';

export const RegisterChildrenInfoContainer: FC = () => {
  const {
    state: { registerChildrenForm },
    setState: { setRegisterChildrenForm },
    useCase: { onClickNextBtnUseCase }
  } = useRegisterChildrenInfoUseCase();

  const onChangeChildName = (e: ChangeEvent<HTMLInputElement>) => {
    setRegisterChildrenForm({
      ...registerChildrenForm,
      childName: e.target.value
    });
  };
  
  const onChangeChildBirth = (birth: string) => {
    setRegisterChildrenForm({
      ...registerChildrenForm,
      childBirth: birth
    });
  };

  const onChangeChildSex = (sex: "male" | "female") => {
    setRegisterChildrenForm({
      ...registerChildrenForm,
      childSex: sex
    });
  };

  return (
    <RegisterChildrenInfoView onChangeChildName={onChangeChildName} onChangeChildBirth={onChangeChildBirth} onChangeChildSex={onChangeChildSex} onClickNextBtn={onClickNextBtnUseCase} />
  );
};