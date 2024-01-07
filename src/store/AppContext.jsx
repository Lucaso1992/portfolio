import { useContext, createContext, useState, useEffect } from "react";

const AppContext = createContext();

export const AppProvider = ({children}) => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const sectionColors = [
      { start: 0, end: 844, color: "whitesmoke" },
      { start: 844, end: 1750, color: "#010409" },  
      { start: 1750, end: 2600, color: "whitesmoke" },  
      { start: 2500, end: 3500, color: "#010409" },  
    
    ];

    useEffect(() => {
      const handleScroll = () => {
        setScrollPosition(window.scrollY);
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    const isScrolled = scrollPosition;

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

    const store = {isSmallScreen, isScrolled, sectionColors};

    return(
        <AppContext.Provider value={{store}}>
            {children}
        </AppContext.Provider>
    )
}

const useAppContext = () => useContext(AppContext);

export default useAppContext;