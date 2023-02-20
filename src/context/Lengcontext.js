
import { createContext,useState } from "react";


const LengContext = createContext()

export const LangPovider = ({children})=>{
  const [leng,setLeng]=useState('en')

}
