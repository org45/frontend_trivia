import React,{useState,createContext} from 'react';
export const LastOptionContext = createContext();

export const LastOptionProvider=(props)=>{
    const [lastInput, setLastInput] = useState(0);
   
    return(
        <LastOptionContext.Provider 
            value={[lastInput, setLastInput]} 
        >
            {props.children}
        </LastOptionContext.Provider>
    )
    
}
