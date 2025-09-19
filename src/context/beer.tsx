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
    { id: "a", value: 0,  state: "first" },
    { id: "b", value: 0,  state: "first" },
    { id: "c", value: 0,  state: "second" },
    { id: "d", value: 0,  state: "first" },
    { id: "e", value: 0,  state: "first" },
  ]);

  const value = { beers, setBeers };

  return <BeerContext.Provider value={value}>{children}</BeerContext.Provider>;
};
