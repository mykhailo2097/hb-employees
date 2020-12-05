import { useCallback, useReducer } from "react";
import { Employees, EmployeesListType } from "../types/type";
import { UsersApi } from "../api/api";

const SET_EMPLOYEES = "SET_EMPLOYEES";
const ADD_SELECTED_USER = "ADD_SELECTED_USERS";
const DELETE_SELECTED_USER = "DELETE_SELECTED_USER";
const LOAD_SELECTED_LIST = "LOAD_SELECTED_LIST";

const selectedUsers = "selectedUsers";

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
    case LOAD_SELECTED_LIST:
      return {
        ...state,
        selectedUserList: action.employeesList,
      };
    case ADD_SELECTED_USER:
      localStorage.setItem(
        selectedUsers,
        JSON.stringify([...state.selectedUserList, action.user])
      );

      return {
        ...state,
        selectedUserList: [...state.selectedUserList, action.user],
      };
    case DELETE_SELECTED_USER:
      localStorage.setItem(
        selectedUsers,
        JSON.stringify(
          state.selectedUserList.filter(
            (element) => element.id !== action.user.id
          )
        )
      );

      return {
        ...state,
        selectedUserList: state.selectedUserList.filter(
          (element) => element.id !== action.user.id
        ),
      };
    default:
      return state;
  }
};

export const useUsers = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const restoreSelectedList = useCallback(() => {
    const employeesList = JSON.parse(
      localStorage.getItem(selectedUsers) || "[]"
    );

    if (employeesList) {
      dispatch({
        type: LOAD_SELECTED_LIST,
        employeesList,
      });
    }
  }, []);

  const getEmployees = useCallback(async () => {
    const response = await UsersApi.getUsers();
    dispatch({
      type: SET_EMPLOYEES,
      employeesList: response,
    });
  }, []);

  const addUserToSelected = useCallback((user: Employees) => {
    dispatch({ type: ADD_SELECTED_USER, user });
  }, []);
  const deleteUserFromSelected = useCallback((user: Employees) => {
    dispatch({ type: DELETE_SELECTED_USER, user });
  }, []);

  return {
    getEmployees,
    employees: state.employeesList,
    addUserToSelected,
    deleteUserFromSelected,
    selectedUserList: state.selectedUserList,
    restoreSelectedList,
  };
};
