import { createContext, useContext, useState } from "react";

const BackgroundContext=createContext();
export const BackgroundProvider=({children})=>{
  const [BackgroundColor,setBackGroundColor]=useState(false)
  return(
    <BackgroundContext.Provider value={{BackgroundColor,setBackGroundColor}}>
      {children}
    </BackgroundContext.Provider>
  )
}
export const useBackground=()=>useContext(BackgroundContext)