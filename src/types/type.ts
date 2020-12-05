export type Employees = {
  id: string;
  firstName: string;
  lastName: string;
  dob: string;
};

export type EmployeesListType = {
  employeesList: Array<Employees>;
  selectedUserList: Array<Employees>;
};

export type UsersContextType = {
  getEmployees(): void;
  restoreSelectedList(): void;
  addUserToSelected(user: Employees): void;
  deleteUserFromSelected(user: Employees): void;
  selectedUserList: Array<Employees>;
  employees: Array<Employees>;
};
