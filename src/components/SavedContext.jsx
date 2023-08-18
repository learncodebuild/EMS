import React, { createContext, useState } from "react";

export const SavedContext = createContext();

export const SavedProvider = ({ children }) => {
  const [dataArr, setDataArr] = useState([]);
  const [showBtns, setShowBtns] = useState(false);
  // console.log("daraay ->>>>>>>>>>>", dataArr);

  return (
    <SavedContext.Provider value={[dataArr, setDataArr, showBtns, setShowBtns]}>
      {children}
    </SavedContext.Provider>
  );
};
