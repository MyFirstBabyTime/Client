import { useState } from 'react';
import { IRegisterChildrenForm } from './payload';

export const useRegisterChildrenInfo = () => {
  const [registerChildrenForm, setRegisterChildrenForm] = useState<IRegisterChildrenForm>({
    childName: "",
    childBirth: "",
    childSex: 'male'
  });

  return {
    state: { registerChildrenForm },
    setState: { setRegisterChildrenForm }
  };
};