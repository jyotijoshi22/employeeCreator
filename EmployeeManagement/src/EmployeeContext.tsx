import { createContext, useState } from "react";

interface EmployeeDataProviderProps {
  children: React.ReactNode;
}

export const EmployeeContext = createContext<any>({});

const EmployeeDataProvider = (props: EmployeeDataProviderProps) => {
  const [allEmployees, setAllEmployees] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    mobile: "",
    address: "",
    contractType: "",
    startDate: "",
    finishDate: "",
    workTimeType: "",
    hoursPerWeek: "",
  });

  const value = { allEmployees, setAllEmployees };

  return (
    <EmployeeContext.Provider value={value}>
      {props.children}
    </EmployeeContext.Provider>
  );
};

export default EmployeeDataProvider;
