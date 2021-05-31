import { useState } from 'react';

export const useRegisterChildrenProfile = () => {
  const [registerChildrenProfile, setRegisterChildrenProfile] = useState<File | undefined>(undefined);

  return {
    state: { registerChildrenProfile },
    setState: { setRegisterChildrenProfile }
  };
};