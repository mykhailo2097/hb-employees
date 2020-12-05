import React, { useContext } from "react";
import styles from "./EmployeesList.module.scss";
import { LetterGroup } from "./LetterGroup/LetterGroup";
import { sortEmployees } from "../../helpers/sortEmployees";
import { UsersContext } from "../../context/UsersContext";

export const EmployeesList: React.FC = () => {
  const { employees } = useContext(UsersContext);

  return (
    <div className={styles.listEmployees}>
      <div className={styles.title}>Employees</div>
      <div className={styles.arrayEmployees}>
        {sortEmployees(employees).map((element) => (
          <div className={styles.groupLetter} key={element.alphabet}>
            <LetterGroup employees={element} />
          </div>
        ))}
      </div>
    </div>
  );
};
