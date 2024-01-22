import { createContext } from "react";

const ThemeContext = createContext();

const ThemeContextProvider = ({ childern }) => {
    return (
        <ThemeContext.Provider value={{ theme: 'dark' }}>
            {childern}
        </ThemeContext.Provider>
    )
}
export { ThemeContext, ThemeContextProvider }