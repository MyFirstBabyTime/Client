import { createContext, FC, useState } from "react";

type ISignUpContext = {
  pageNum: number;
  id: string,
  pw: string,
  phoneNum: string,
  onIncreasePageNum: () => void;
  onDecreasePageNum: () => void;
  setContextId: (id: string) => void;
  setContextPw: (pw: string) => void;
  setContextPhoneNum: (phoneNum: string) => void;
};

export const SignUpContext = createContext<ISignUpContext>({
  pageNum: 1,
  id: "",
  pw: "",
  phoneNum: "",
  onIncreasePageNum: () => { },
  onDecreasePageNum: () => { },
  setContextId: (id: string) => { },
  setContextPw: (pw: string) => { },
  setContextPhoneNum: (phoneNum: string) => { }
});

const SignUpContextProvider: FC = ({ children }) => {
  const [page, setPage] = useState<number>(1);
  const [id, setId] = useState<string>("");
  const [pw, setPw] = useState<string>("");
  const [phoneNum, setPhonNum] = useState<string>("");

  const value = {
    pageNum: page,
    id: id,
    pw: pw,
    phoneNum: phoneNum,
    onIncreasePageNum: () => setPage((page) => page + 1),
    onDecreasePageNum: () => setPage((page) => page - 1),
    setContextId: (id: string) => setId(id),
    setContextPw: (pw: string) => setPw(pw),
    setContextPhoneNum: (phoneNum: string) => setPhonNum(phoneNum),
  }

  return (
    <SignUpContext.Provider value={value}>
      {children}
    </SignUpContext.Provider>
  )
}

export default SignUpContextProvider;