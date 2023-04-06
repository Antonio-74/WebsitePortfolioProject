import { createContext, useContext, useReducer, useEffect } from "react";
import themeReducer from "./themeReducer";

export const ThemeContext = createContext();

const initialThemeState = JSON.parse(localStorage.getItem('itemSettings')) || { primary: 'color-1', background: 'bg-1' }

export const ThemeProvider = ({children}) => {
    const [themeState, dispatchTheme] = useReducer(themeReducer, initialThemeState);
    
    const themeHandler = (buttonClassName) => {
        dispatchTheme({type: buttonClassName})
    }

    //Save theme settings in local storage
    useEffect(() => {
        localStorage.setItem('itemSettings', JSON.stringify(themeState))
    }, [themeState.primary, themeState.background]);

    return <ThemeContext.Provider value={{themeState, themeHandler}}>{children}</ThemeContext.Provider>
}

// custom hook to use our theme context whereever we want in out project
export const useThemeContext = () => {
    return useContext(ThemeContext);
}