import React from "react";
import { LetterGroupType } from "./type";
import styles from "./LetterGroup.module.scss";

export const LetterGroup = ({ employees }: LetterGroupType) => {
  return (
    <div className={styles.letterGroup}>
      <div className={styles.alphabet}>{employees.alphabet}</div>
      {employees.list.length ? (
        employees.list.map((element) => (
          <div key={element.id} className={styles.employeesInfo}>
            <div className={styles.employees}>
              {element.lastName}&nbsp;
              {element.firstName}
            </div>
            <input className={styles.checkbox} type={"checkbox"} />
          </div>
        ))
      ) : (
        <div className={styles.noEmployees}>---</div>
      )}
    </div>
  );
};
