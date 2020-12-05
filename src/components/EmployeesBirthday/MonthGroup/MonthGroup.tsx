import React from "react";
import { format } from "date-fns";
import styles from "./MonthGroup.module.scss";
import { Employees } from "../../../types/type";
import { ReactComponent as Present } from "../../../assets/present.svg";

export const MonthGroup = ({ userList, month }: any) => {
  return (
    <div className={styles.monthGroup}>
      <div className={styles.monthName}>{month}</div>
      {userList.map((user: Employees) => (
        <div key={user.id} className={styles.userInfo}>
          <Present />
          <div className={styles.user}>
            {user.lastName}&nbsp;
            {user.firstName}
          </div>
          &nbsp;-&nbsp;
          <div className={styles.userBirthday}>
            {format(new Date(user.dob), "dd MMMM, yyyy ")} year
          </div>
        </div>
      ))}
    </div>
  );
};
