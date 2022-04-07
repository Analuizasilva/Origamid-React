import React from "react";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  fetch("https://ranekapi.origamid.dev/json/api/usuario", {
    method: "POST",
    headers: {
      "Content-Type": "applications/jason",
    },
    body: JSON.stringify(form),
  });

  return (
    <GlobalContext.Provider value={{ dados }}>
      {children}
    </GlobalContext.Provider>
  );
};
