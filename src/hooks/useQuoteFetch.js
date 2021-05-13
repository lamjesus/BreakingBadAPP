import { useState,useEffect } from "react";
import { quoteFetch } from "../helpers/FetchQuotes";

export const useQuoteFetch = (character) => {
  const [state, setstate] = useState({
        data:[],
        loading: true
    }) 
    useEffect(() => {
        quoteFetch(character).then(char=>{
            console.log(char)
            setstate({
                data:char,
                loading: false
            })
        })   
    
   }, [character])

    
   
    return state
}
