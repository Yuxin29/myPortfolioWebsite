import React, { createContext, useContext, useState, useMemo} from "react";

export const ThemeContext = createContext({
    isAccessibilityMode: false,
    toddleAccessibility: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
    const [isAccessibilityMode, setIsAccessibilityMode] = useState(false); 

    const toggleAccessibility = () => {
        setIsAccessibilityMode((prevMode) => !prevMode);
    };

    const contextValue = useMemo(() => ({
        isAccessibilityMode,
        toggleAccessibility,
    }), [isAccessibilityMode]); 

    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    );
};

