import { Children, createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext()

export const ThemeProvider = ({children})=>{
    const [theme, setTheme] = useState(()=>{
        return localStorage.getItem('app-theme' || 'light')
    })

    useEffect(()=>{
        document.body.className='';
        document.body.classList.add(theme)
        localStorage('app-theme', theme)
    }, [theme])


    return(
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )

}

export const useTheme = () => useContext(ThemeContext)