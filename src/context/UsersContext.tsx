import React, { FC, createContext } from "react";
import { useUsers } from "../hook/users";
import { UsersContextType } from "../types/type";

function noop() {}

export const UsersContext = createContext<UsersContextType>({
  getEmployees: noop,
  addUserToSelected: noop,
  deleteUserFromSelected: noop,
  employees: [],
  selectedUserList: [],
});

export const UsersProvider: FC = ({ children }) => {
  const {
    getEmployees,
    employees,
    addUserToSelected,
    deleteUserFromSelected,
    selectedUserList,
  } = useUsers();

  return (
    <UsersContext.Provider
      value={{
        getEmployees,
        employees,
        addUserToSelected,
        selectedUserList,
        deleteUserFromSelected,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};
