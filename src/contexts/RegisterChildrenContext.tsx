import { createContext, FC, useState } from 'react';

type IRegisterChildrenContext = {
  contextChildName: string;
  contextChildBirth: string;
  contextChildSex: string;
  setContextChildName: (name: string) => void;
  setContextChildBirth: (birth: string) => void;
  setContextChildSex: (sex: string) => void;
}

export const RegisterChildrenContext = createContext<IRegisterChildrenContext>({
  contextChildName: "",
  contextChildBirth: "",
  contextChildSex: "",
  setContextChildName: (name: string) => { },
  setContextChildBirth: (birth: string) => { },
  setContextChildSex: (sex: string) => { },
});

const RegisterChildrenContextProvider: FC = ({ children }) => {
  const [contextChildName, setContextChildName] = useState<string>("");
  const [contextChildBirth, setContextChildBirth] = useState<string>("");
  const [contextChildSex, setContextChildSex] = useState<string>("");

  const value = {
    contextChildName: contextChildName,
    contextChildBirth: contextChildBirth,
    contextChildSex: contextChildSex,
    setContextChildName: (name: string) => setContextChildName(name),
    setContextChildBirth: (birth: string) => setContextChildBirth(birth),
    setContextChildSex: (sex: string) => setContextChildSex(sex),
  };

  return (
    <RegisterChildrenContext.Provider value={value}>
      {children}
    </RegisterChildrenContext.Provider>
  )
}

export default RegisterChildrenContextProvider;