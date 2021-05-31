import { ChangeEvent, FC, useState } from 'react';
import useRegisterChildrenProfileUseCase from '../../../hooks/useCase/useRegisterChildrenUseCase/useRegisterChildrenProfileUseCase';
import { RegisterChildrenProfileView } from './RegisterChildrenProfileView';

export const RegisterChildrenProfileContainer: FC = () => {
  const [thumbnail, setThumbnail] = useState<string | undefined>();
  const {
    setState: { setRegisterChildrenProfile },
    useCase: { createChildUseCase }
  } = useRegisterChildrenProfileUseCase();

  const onChangeProfileImg = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    
    const reader = new FileReader();
    
    setRegisterChildrenProfile(e.target.files[0]);
    
    reader.onload = function (e) {
      setThumbnail(e.target?.result?.toString());
    }

    reader.readAsDataURL(e.target.files[0]);
  }

  return <RegisterChildrenProfileView onChangeProfileImg={onChangeProfileImg} thumbnail={thumbnail} onClickSubmitBtn={createChildUseCase} />
}
