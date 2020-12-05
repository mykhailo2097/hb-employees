import { Employees } from "../../../types/type";

export type LetterGroupType = {
  employees: {
    alphabet: string;
    list: Array<Employees>;
  };
};
