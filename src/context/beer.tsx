import React, { createContext, useContext, useState, ReactNode } from "react";
import { BeerI } from "../types";

export type BeerContextType = {
  beers: BeerI[];
  setBeers: React.Dispatch<React.SetStateAction<BeerI[]>>;
};

export const BeerContext = createContext<BeerContextType | undefined>(
  undefined
);

export const useBeer = () => {
  const context = useContext(BeerContext);
  if (context === undefined) {
    throw new Error("useBeer must be used within a BeerProvider");
  }
  return context;
};

interface BeerProviderProps {
  children: ReactNode;
}

export const BeerProvider: React.FC<BeerProviderProps> = ({ children }) => {
  const [beers, setBeers] = useState<BeerI[]>([
    { id: "a", value: 2, check: false, flag: false },
    { id: "b", value: 2, check: false, flag: false },
    { id: "c", value: 2, check: false, flag: true },
    { id: "d", value: 2, check: false, flag: false },
    { id: "e", value: 2, check: false, flag: false },
  ]);

  const value = { beers, setBeers };

  return <BeerContext.Provider value={value}>{children}</BeerContext.Provider>;
};
