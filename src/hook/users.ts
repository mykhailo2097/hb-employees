import { useCallback, useReducer } from "react";
import { EmployeesType } from "../types/type";
import { UsersApi } from "../api/api";

const SET_EMPLOYEES = "SET_EMPLOYEES";

const initialState: EmployeesType = { employeesList: [] };

const reducer = (state: EmployeesType, action: any): EmployeesType => {
  switch (action.type) {
    case SET_EMPLOYEES:
      return {
        ...state,
        employeesList: action.employeesList,
      };
    default:
      return state;
  }
};

export const useUsers = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getEmployees = useCallback(async () => {
    const response = await UsersApi.getUsers();
    dispatch({
      type: SET_EMPLOYEES,
      employeesList: response,
    });
  }, []);

  return {
    getEmployees,
    employees: state.employeesList,
  };
};
