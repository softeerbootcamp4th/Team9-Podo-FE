import React, { createContext, useState, useContext, ReactNode } from "react";

interface AppState {
  isAuth: boolean;
  isFCFSEnd: boolean;
  isRandomEnd: boolean;
  setIsAuth: (isAuth: boolean) => void;
  setIsFCFSEnd: (isFCFSEnd: boolean) => void;
  setIsRandomEnd: (isRandomEnd: boolean) => void;
}

interface AppProviderInterface {
  children: ReactNode;
}

const AppContext = createContext<AppState | undefined>(undefined);

const AppProvider = ({ children }: AppProviderInterface) => {
  const [isAuth, setIsAuth] = useState(false);
  const [isFCFSEnd, setIsFCFSEnd] = useState(false);
  const [isRandomEnd, setIsRandomEnd] = useState(false);

  return (
    <AppContext.Provider
      value={{
        isAuth,
        setIsAuth,
        isFCFSEnd,
        setIsFCFSEnd,
        isRandomEnd,
        setIsRandomEnd,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

/**
 * {isAuth, setIsAuth, isFCFSEnd, setIsFCFSEnd, isRandomEnd, setIsRandomEnd}
 * @returns
 */
const useAppContext = () => useContext(AppContext);

export { AppProvider, useAppContext };
