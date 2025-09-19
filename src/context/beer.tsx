import React, { createContext, useContext, useState, ReactNode } from "react";
import { BeerI } from "../types";

export type BeerContextType = {
  beers: BeerI[];
  setBeers: React.Dispatch<React.SetStateAction<BeerI[]>>;
};

export const BeerContext = createContext<BeerContextType | undefined>(
  undefined
);

interface BeerProviderProps {
  children: ReactNode;
}

export const BeerProvider: React.FC<BeerProviderProps> = ({ children }) => {
  const [beers, setBeers] = useState<BeerI[]>([
    { id: "a", value: 0,  state: "first", flag:false },
    { id: "b", value: 0,  state: "first", flag:false },
    { id: "c", value: 0,  state: "second", flag:false },
    { id: "d", value: 0,  state: "first", flag:false },
    { id: "e", value: 0,  state: "first", flag:false },
  ]);

  const value = { beers, setBeers };

  return <BeerContext.Provider value={value}>{children}</BeerContext.Provider>;
};
