import { useCallback, useReducer } from "react";
import { EmployeesListType } from "../types/type";
import { UsersApi } from "../api/api";

const SET_EMPLOYEES = "SET_EMPLOYEES";
const ADD_SELECTED_USER = "ADD_SELECTED_USERS";
const DELETE_SELECTED_USER = "DELETE_SELECTED_USER";

const initialState: EmployeesListType = {
  employeesList: [],
  selectedUserList: [],
};

const reducer = (state: EmployeesListType, action: any): EmployeesListType => {
  switch (action.type) {
    case SET_EMPLOYEES:
      return {
        ...state,
        employeesList: action.employeesList,
      };
    case ADD_SELECTED_USER:
      return {
        ...state,
        selectedUserList: [...state.selectedUserList, action.userId],
      };
    case DELETE_SELECTED_USER:
      return {
        ...state,
        selectedUserList: state.selectedUserList.filter(
          (element) => element !== action.userId
        ),
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

  const addUserToSelected = useCallback((userId: string) => {
    dispatch({ type: ADD_SELECTED_USER, userId });
  }, []);
  const deleteUserFromSelected = useCallback((userId: string) => {
    dispatch({ type: DELETE_SELECTED_USER, userId });
  }, []);

  return {
    getEmployees,
    employees: state.employeesList,
    addUserToSelected,
    deleteUserFromSelected,
    selectedUserList: state.selectedUserList,
  };
};
