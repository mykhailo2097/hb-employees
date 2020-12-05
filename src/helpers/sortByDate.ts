import { Employees } from "../types/type";

export const sortByDate = (employees: Array<Employees>) => {
  const sortDate: any = {};

  employees.forEach((employer) => {
    const month = new Date(employer.dob).toLocaleString("en-us", {
      month: "long",
    });
    sortDate[month] = sortDate[month] ? sortDate[month] : [];
    sortDate[month].push(employer);
    sortDate[month].sort((a: Employees, b: Employees) =>
      a.dob > b.dob ? 1 : -1
    );
  });

  return sortDate;
};

export const monthName = () => {
  const monthName = [];
  for (let index = 1; index < 13; index++) {
    const month = new Date(`2020-${index}-01`).toLocaleString("en-us", {
      month: "long",
    });
    monthName.push(month);
  }

  return monthName;
};
