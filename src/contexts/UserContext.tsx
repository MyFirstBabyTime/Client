import { createContext, FC, useState } from 'react';

type IUserContext = {
  uuid: string;
  setUuid: (uuid: string) => void;
}

export const UserContext = createContext<IUserContext>({
  uuid: "",
  setUuid: (uuid: string) => { },
})

const UserContextProvider: FC = ({ children }) => {
  const [uuid, setUuid] = useState<string>("");

  const value = {
      uuid: uuid,
      setUuid: (uuid: string) => setUuid(uuid),
  }

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider;