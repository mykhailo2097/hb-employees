import { Employees } from "../types/type";

export const sortEmployees = (employees: Array<Employees>) => {
  const sortList: Array<{ alphabet: string; list: Array<Employees> }> = [];
  for (let code = 65; code < 91; code++) {
    sortList.push({ alphabet: String.fromCharCode(code), list: [] });
    employees.forEach((element) => {
      if (
        element.lastName[0] === String.fromCharCode(code) ||
        element.lastName[0] === String.fromCharCode(code + 32)
      ) {
        sortList[code - 65].list.push(element);
      }
    });
  }

  return sortList;
};
