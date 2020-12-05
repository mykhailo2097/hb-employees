import React from "react";
import styles from "./EmployeesList.module.scss";
import { EmployeesListType } from "./type";
import { LetterGroup } from "./LetterGroup/LetterGroup";
import { sortEmployees } from "../../helpers/sortEmployees";

export const EmployeesList = ({ employees }: EmployeesListType) => {
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
