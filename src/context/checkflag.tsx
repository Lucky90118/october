import React, { createContext, useState, ReactNode } from "react";

export type CheckFlagContextType = {
  checkFlag: boolean;
  allBeerValue: number;
  setCheckFlag: React.Dispatch<React.SetStateAction<boolean>>;
  setAllBeerValue: React.Dispatch<React.SetStateAction<number>>;
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
  const [allBeerValue, setAllBeerValue] = useState<number>(0);

  const value = { checkFlag, allBeerValue, setCheckFlag, setAllBeerValue };

  return (
    <CheckFlagContext.Provider value={value}>
      {children}
    </CheckFlagContext.Provider>
  );
};
