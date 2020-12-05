import React, { ChangeEvent, useContext } from "react";
import { LetterGroupType } from "./type";
import styles from "./LetterGroup.module.scss";
import { UsersContext } from "../../../context/UsersContext";

export const LetterGroup = ({ employees }: LetterGroupType) => {
  const {
    addUserToSelected,
    deleteUserFromSelected,
    selectedUserList,
  } = useContext(UsersContext);

  const onChangeCheckbox = (
    event: ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    if (event.target.checked) {
      addUserToSelected(id);
    } else {
      deleteUserFromSelected(id);
    }
  };

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
            <input
              onChange={(event) => onChangeCheckbox(event, element.id)}
              checked={selectedUserList.includes(element.id)}
              className={styles.checkbox}
              type={"checkbox"}
            />
          </div>
        ))
      ) : (
        <div className={styles.noEmployees}>---</div>
      )}
    </div>
  );
};
