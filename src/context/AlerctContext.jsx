import {createContext, useContext, useState} from "react";

const AlertContext = createContext({
    isOpen: false,
    type: 'success',
    message: 'Message',
  })

export const AlertProvider = ({ children }) => {
  const [state, setState] = useState({
    isOpen: false,
    type: 'success',
    message: 'Message',
  })

  const value = {
    ... state , 
     onOpen: (type, message) => setState({ isOpen: true, type, message }),
     onClose: () => setState({ isOpen: false, type: '', message: '' }),
  }
  return (
    <AlertContext.Provider
      value={value} >
      {children}
    </AlertContext.Provider>
  );
};

export const useAlertContext = () => useContext(AlertContext);