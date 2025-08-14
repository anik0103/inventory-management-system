import React, { createContext, useState, useEffect } from "react";

export const RegionContext = createContext();

export const RegionProvider = ({ children }) => {
  const [selectedRegion, setSelectedRegion] = useState(null) // Default region;
  
    // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("selectedRegion");
    if (saved) {
      setSelectedRegion(saved);
    }
  }, []);

  // Save to localStorage whenever it changes
  useEffect(() => {
    if (selectedRegion) {
      localStorage.setItem("selectedRegion", selectedRegion);
    }
  }, [selectedRegion]);

  return (
    <RegionContext.Provider value={{ selectedRegion, setSelectedRegion }}>
      {children}
    </RegionContext.Provider>
  );
};
export default RegionProvider;