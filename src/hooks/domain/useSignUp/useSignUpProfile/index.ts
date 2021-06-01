import { useState } from "react";
import { IProfileData } from "./payload";

export const useSignUpProfile = () => {
  const [thumbnail, setThumbnail] = useState<string | undefined>();
  const [profileData, setProfileData] = useState<IProfileData>({
    name: "",
    profile: null,
  });
  const [nameError, setNameError] = useState<boolean>(false);

  return {
    state: {
      thumbnail,
      profileData,
      nameError,
    },
    setState: {
      setThumbnail,
      setProfileData,
      setNameError,
    },
  };
};
