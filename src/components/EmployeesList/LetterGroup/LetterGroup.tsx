import React, { ChangeEvent, useContext } from "react";
import { LetterGroupType } from "./type";
import styles from "./LetterGroup.module.scss";
import { UsersContext } from "../../../context/UsersContext";
import { Employees } from "../../../types/type";

export const LetterGroup: React.FC<LetterGroupType> = ({
  employees,
}: LetterGroupType) => {
  const {
    addUserToSelected,
    deleteUserFromSelected,
    selectedUserList,
  } = useContext(UsersContext);

  const onChangeCheckbox = (
    event: ChangeEvent<HTMLInputElement>,
    user: Employees
  ) => {
    if (event.target.checked) {
      addUserToSelected(user);
    } else {
      deleteUserFromSelected(user);
    }
  };

  return (
    <div className={styles.letterGroup}>
      <div className={styles.alphabet}>{employees.alphabet}</div>
      {employees.list.length ? (
        employees.list.map((user) => (
          <div key={user.id} className={styles.employeesInfo}>
            <div className={styles.employees}>
              {user.lastName}&nbsp;
              {user.firstName}
            </div>
            <input
              onChange={(event) => onChangeCheckbox(event, user)}
              checked={
                !!selectedUserList.find((employees) => employees.id === user.id)
              }
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
