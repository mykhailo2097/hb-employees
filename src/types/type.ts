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

export type UsersContextType = {
  getEmployees(): void;
  employees: Array<Employees>;
};
