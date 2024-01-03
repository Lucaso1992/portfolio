import { useContext, createContext, useState, useEffect } from "react";

const AppContext = createContext();

export const AppProvider = ({children}) => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    
    const useMediaQuery = (query) => {
        return new Promise((resolve) => {
          const mediaQuery = window.matchMedia(query);
          resolve(mediaQuery.matches);
          const handleMediaQueryChange = () => {
            resolve(mediaQuery.matches);
          };
          mediaQuery.addEventListener("change", handleMediaQueryChange);
          return () => {
            mediaQuery.removeEventListener("change", handleMediaQueryChange);
          };
        });
        };

        useEffect(() => {
        const fetchMediaQuery = async () => {
          const isSmall = await useMediaQuery("(max-width: 767px)");
          setIsSmallScreen(isSmall);
        };
        fetchMediaQuery();
      }, []);

    const store = {isSmallScreen};

    // const actions = {};

    return(
        <AppContext.Provider value={{store}}>
            {children}
        </AppContext.Provider>
    )
}

const useAppContext = () => useContext(AppContext);

export default useAppContext;