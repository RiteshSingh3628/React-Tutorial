import { createContext,useState } from "react";
const CommonContext = createContext();

export const MyProvider = ({children}) =>{
    const [theme,setTheme] = useState('light')
    const [value,setValue] = useState(25)
    return(
        <CommonContext.Provider value={{theme,setTheme,value,setValue}}>
            {children}
        </CommonContext.Provider>
    )
}

export default CommonContext;