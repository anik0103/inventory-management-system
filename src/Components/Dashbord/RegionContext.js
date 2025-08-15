import React, { createContext, useState, useEffect } from "react";

export const RegionContext = createContext();

export const RegionProvider = ({ children }) => {
  const [selectedRegion, setSelectedRegion] = useState("");

  useEffect(() => {
    // Load from localStorage when app starts
    const savedRegion = localStorage.getItem("selectedRegion");
    if (savedRegion) {
      setSelectedRegion(savedRegion);
    } else {
      setSelectedRegion("kolkata"); // default
      localStorage.setItem("selectedRegion", "kolkata");
    }
  }, []);

  // Save to localStorage whenever it changes
  useEffect(() => {
    if (selectedRegion) {
      localStorage.setItem("selectedRegion", selectedRegion);
    }
  }, [selectedRegion]);

  const updateRegion = (region) => {
    setSelectedRegion(region);
    localStorage.setItem("selectedRegion", region);
  };

  return (
    <RegionContext.Provider value={{ selectedRegion, setSelectedRegion: updateRegion }}>
      {children}
    </RegionContext.Provider>
  );
};
export default RegionProvider;