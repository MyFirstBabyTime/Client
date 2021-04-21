import { createContext, FC, useState } from "react";

type ISignUpContext = {
  pageNum: number;
  onIncreasePageNum: () => void;
  onDecreasePageNum: () => void;
};

export const SignUpContext = createContext<ISignUpContext>({
  pageNum: 1,
  onIncreasePageNum: () => { },
  onDecreasePageNum: () => { },
});

const SignUpContextProvider: FC = ({ children }) => {
  const [page, setPage] = useState<number>(1);

  const value = {
    pageNum: page,
    onIncreasePageNum: () => setPage((page) => page + 1),
    onDecreasePageNum: () => setPage((page) => page - 1),
  }

  return (
    <SignUpContext.Provider value={value}>
      {children}
    </SignUpContext.Provider>
  )
}

export default SignUpContextProvider;