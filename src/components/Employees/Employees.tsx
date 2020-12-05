import React from "react";
import styles from "./Employees.module.scss";
import { EmployeesBirthday } from "../EmployeesBirthday/EmployeesBirthday";
import { EmployeesList } from "../EmployeesList/EmployeesList";

export const Employees = () => {
  return (
    <div className={styles.employersPage}>
      <EmployeesList />
      <EmployeesBirthday />
    </div>
  );
};
