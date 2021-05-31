import { createContext, FC, useState } from 'react';

type IRegisterChildrenContext = {
  pageNum: number;
  contextChildName: string;
  contextChildBirth: string;
  contextChildSex: 'male' | 'female';
  contextParentUuid: string;
  onIncreasePageNum: () => void;
  onDecreasePageNum: () => void;
  setContextChildName: (name: string) => void;
  setContextChildBirth: (birth: string) => void;
  setContextChildSex: (sex: 'male' | 'female') => void;
  setContextParentUuid: (uuid: string) => void;
}

export const RegisterChildrenContext = createContext<IRegisterChildrenContext>({
  pageNum: 1,
  contextChildName: "",
  contextChildBirth: "",
  contextChildSex: "male",
  contextParentUuid: "",
  onIncreasePageNum: () => { },
  onDecreasePageNum: () => { },
  setContextChildName: (name: string) => { },
  setContextChildBirth: (birth: string) => { },
  setContextChildSex: (sex: 'male' | 'female') => { },
  setContextParentUuid: (uuid: string) => { },
});

const RegisterChildrenContextProvider: FC = ({ children }) => {
  const [page, setPage] = useState<number>(1);
  const [contextChildName, setContextChildName] = useState<string>("");
  const [contextChildBirth, setContextChildBirth] = useState<string>("");
  const [contextChildSex, setContextChildSex] = useState<"male" | "female">("male");
  const [contextParentUuid, setContextParentUuid] = useState<string>("");

  const value = {
    pageNum: page,
    contextChildName: contextChildName,
    contextChildBirth: contextChildBirth,
    contextChildSex: contextChildSex,
    contextParentUuid: contextParentUuid,
    onIncreasePageNum: () => setPage((page) => page + 1),
    onDecreasePageNum: () => setPage((page) => page - 1),
    setContextChildName: (name: string) => setContextChildName(name),
    setContextChildBirth: (birth: string) => setContextChildBirth(birth),
    setContextChildSex: (sex: 'male' | 'female') => setContextChildSex(sex),
    setContextParentUuid: (uuid: string) => setContextParentUuid(uuid),
  };

  return (
    <RegisterChildrenContext.Provider value={value}>
      {children}
    </RegisterChildrenContext.Provider>
  )
}

export default RegisterChildrenContextProvider;