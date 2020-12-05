import React, { useContext, useEffect } from "react";
import styles from "./Employees.module.scss";
import { EmployeesBirthday } from "../EmployeesBirthday/EmployeesBirthday";
import { EmployeesList } from "../EmployeesList/EmployeesList";
import { UsersContext } from "../../context/UsersContext";

export const Employees = () => {
  const { employees, getEmployees } = useContext(UsersContext);
  useEffect(() => {
    getEmployees();
  }, []);

  return (
    <div className={styles.employersPage}>
      <EmployeesList employees={employees} />
      <EmployeesBirthday />
    </div>
  );
};
