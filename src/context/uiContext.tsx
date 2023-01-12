import React, { createContext, useContext, useState } from 'react';
import { iUiContext } from '../libs/interfaces/UiContext.interface';

export const UiContext = createContext<iUiContext>({} as iUiContext);

type UiContextProviderProps = {
  children: React.ReactNode;
};

export const UiContextProvider = ({ children }: UiContextProviderProps) => {
  const [displayType, setDisplayType] = useState<1 | 2 | 4>(1);
  return (
    <UiContext.Provider
      value={{
        displayType,
        setDisplayType,
      }}
    >
      {children}
    </UiContext.Provider>
  );
};

export const useUiContext = () => useContext(UiContext);
