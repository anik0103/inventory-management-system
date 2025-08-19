import React, { createContext, useState, useContext } from "react";

const PdtContext = createContext();

export const useProducts = () => useContext(PdtContext);

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const addProduct = (product) => {
    setProducts((prev) => [...prev, product]);
  };

  return (
    <PdtContext.Provider value={{ products, addProduct }}>
      {children}
    </PdtContext.Provider>
  );
};
