import React, { useContext } from "react";
import styles from "./EmployeesBirthday.module.scss";
import { UsersContext } from "../../context/UsersContext";
import { monthName, sortByDate } from "../../helpers/sortByDate";
import { MonthGroup } from "./MonthGroup/MonthGroup";

export const EmployeesBirthday: React.FC = () => {
  const { selectedUserList } = useContext(UsersContext);
  const sortDate = sortByDate(selectedUserList);

  return (
    <div className={styles.birthdayEmployees}>
      <div className={styles.title}>Employees birthday</div>
      {selectedUserList.length ? (
        <div className={styles.groupMonth}>
          {monthName().map((month) => (
            <div key={month}>
              {sortDate[month] && (
                <MonthGroup month={month} userList={sortDate[month]} />
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.noSelected}>No selected employees</div>
      )}
    </div>
  );
};
