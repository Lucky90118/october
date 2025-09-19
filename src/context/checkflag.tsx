import React, { createContext, useState, ReactNode } from "react";

export type CheckFlagContextType = {
  checkFlag: boolean;
  setCheckFlag: React.Dispatch<React.SetStateAction<boolean>>;
};

export const CheckFlagContext = createContext<CheckFlagContextType | undefined>(
  undefined
);

interface CheckFlagProviderProps {
  children: ReactNode;
}

export const CheckFlagProvider: React.FC<CheckFlagProviderProps> = ({
  children,
}) => {
  const [checkFlag, setCheckFlag] = useState<boolean>(false);

  const value = { checkFlag, setCheckFlag };

  return (
    <CheckFlagContext.Provider value={value}>
      {children}
    </CheckFlagContext.Provider>
  );
};
