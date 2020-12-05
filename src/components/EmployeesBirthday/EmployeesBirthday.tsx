import React, { useContext } from "react";
import styles from "./EmployeesBirthday.module.scss";
import { UsersContext } from "../../context/UsersContext";

export const EmployeesBirthday: React.FC = () => {
  const { selectedUserList } = useContext(UsersContext);

  return (
    <div className={styles.birthdayEmployees}>
      <div className={styles.title}>Employees birthday</div>
      {selectedUserList.length ? (
        <div></div>
      ) : (
        <div className={styles.noSelected}>No selected employees</div>
      )}
    </div>
  );
};
