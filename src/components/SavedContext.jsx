import React, {createContext,useState} from "react";

export const SavedContext=createContext();

export const SavedProvider=({children})=>{
    const [dataArr,setDataArr]= useState([]);

    return (
        <SavedContext.Provider value={[dataArr,setDataArr]}>
            {children}
        </SavedContext.Provider>
    );
}