import React, { createContext, useContext, useState } from "react";

// ساخت Context
const ZoomContext = createContext();

// Provider
export const ZoomProvider = ({ children }) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [isSliderVisible, setIsSliderVisible] = useState(false);

  const openZoom = () => setIsZoomed(true);
  const closeZoom = () => setIsZoomed(false);

  const showSlider = () => setIsSliderVisible(true);
  const hideSlider = () => setIsSliderVisible(false);

  return (
    <ZoomContext.Provider
      value={{
        isZoomed,
        setIsZoomed,
        isSliderVisible,
        setIsSliderVisible,
        openZoom,
        closeZoom,
        showSlider,
        hideSlider,
      }}
    >
      {children}
    </ZoomContext.Provider>
  );
};

// Hook برای استفاده آسان از Context
export const useZoom = () => {
  const context = useContext(ZoomContext);
  if (!context) {
    throw new Error("useZoom must be used within a ZoomProvider");
  }
  return context;
};
