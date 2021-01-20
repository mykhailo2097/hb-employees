import React, { useContext, useEffect } from "react";
import { Routes } from "./routes";
import { UsersContext } from "./context/UsersContext";

export const App: React.FC = () => {
  const { getEmployees, restoreSelectedList } = useContext(UsersContext);

  useEffect(() => {
    getEmployees();
    restoreSelectedList();
    console.log("hello");
  }, []);

  return (
    <div className="App">
      <Routes />
    </div>
  );
};
