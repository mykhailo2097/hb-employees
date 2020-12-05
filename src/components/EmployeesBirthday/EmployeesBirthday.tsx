import React from "react";
import styles from "./EmployeesBirthday.module.scss";

export const EmployeesBirthday = ({ selectedEmployees }: any) => {
  return (
    <div className={styles.birthdayEmployees}>
      <div className={styles.title}>Employees birthday</div>
      {selectedEmployees.length ? (
        <div></div>
      ) : (
        <div className={styles.noSelected}>No selected employees</div>
      )}
    </div>
  );
};
