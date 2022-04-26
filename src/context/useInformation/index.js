import { createContext, useContext, useState } from 'react';

const InformationContext = createContext({});

export const InformationProvider = ({ children }) => {
  const [openInformation, setOpenInformation] = useState([false, 0]);

  return (
    <InformationContext.Provider value={{ openInformation, setOpenInformation }}>
      {children}
    </InformationContext.Provider>
  );
};

export const useInformation = () => useContext(InformationContext);
