export type Employees = {
  id: string;
  firstName: string;
  lastName: string;
  dob: Date;
  checked: boolean;
};

export type EmployeesType = {
  employeesList: Array<Employees>;
};

export type EmployeesListType = {
  employeesList: Array<Employees>;
  selectedUserList: Array<string>;
};

export type UsersContextType = {
  getEmployees(): void;
  addUserToSelected(userId: string): void;
  deleteUserFromSelected(userId: string): void;
  selectedUserList: Array<string>;
  employees: Array<Employees>;
};
