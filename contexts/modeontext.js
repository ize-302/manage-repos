import React from "react";

export const ModeContext = React.createContext();

const ModeContextProvider = (props) => {
  const [isDark, setisDark] = React.useState(false);

  const toggleMode = () => {
    setisDark(!isDark);
  };

  return (
    <ModeContext.Provider value={{ isDark, toggleMode }}>
      {props.children}
    </ModeContext.Provider>
  );
};

export default ModeContextProvider;
