import { useState } from "react";
import { IProfileData } from "./payload";

export const useSignUpProfile = () => {
  const [profileData, setProfileData] = useState<IProfileData>({
    name: "",
    profile: null,
  });
  const [nameError, setNameError] = useState<boolean>(false);

  return {
    state: {
      profileData,
      nameError,
    },
    setState: {
      setProfileData,
      setNameError,
    },
  };
};
