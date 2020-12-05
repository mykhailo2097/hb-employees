import { EmployeesType } from "../types/type";

export const initialState: EmployeesType = {
  employeesList: [],
};

export const Employees = (state: EmployeesType, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};
