import React, { FC, createContext } from "react";
import { useUsers } from "../hook/users";
import { UsersContextType } from "../types/type";

function noop() {}

export const UsersContext = createContext<UsersContextType>({
  getEmployees: noop,
  employees: [],
});

export const UsersProvider: FC = ({ children }) => {
  const { getEmployees, employees } = useUsers();

  return (
    <UsersContext.Provider value={{ getEmployees, employees }}>
      {children}
    </UsersContext.Provider>
  );
};
