import React, { createContext, useState } from "react";

import { useRouter } from "next/router";

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const router = useRouter();
  const [user, setUser] = useState({});
  const storeUser = (user) => {
    setUser(user);
  };
  const logout = () => {
    window.localStorage.removeItem("accessToken");
    router.push("/");
  };
  return (
    <UserContext.Provider value={{ user, storeUser, logout }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
