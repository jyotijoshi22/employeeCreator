import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";
import { RouteProps } from "react-router-dom";

interface Employee {
  id: any;
  firstName: string;
  middleName: string;
  lastName: string;
  emailId: string;
  contactNumber: string;
  address: string;
  contractType: string;
  startDate: string;
  finishDate: string;
  workTimeType: string;
  hoursPerWeek: string;
}

const EmployeeList: React.FC<RouteProps> = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    EmployeeService.getEmployees().then((res) => {
      setEmployees(res.data);
    });
  }, []);

  const handleDelete = (id: any) => {
    EmployeeService.deleteEmployee(id).then(() => {
      setEmployees((prevEmployees) => prevEmployees.filter((e) => e.id !== id));
    });
  };

  return (
    <div>
      <h2 className="text-center">Employees List</h2>

      <div className="row">
        <Link to="/add-employee" className="btn btn-primary">
          ADD EMPLOYEE
        </Link>
      </div>

      <div className="row">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Middle Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr>
                <th key={index}>{index + 1} </th>
                <td>{employee.firstName}</td>
                <td>{employee.middleName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.emailId}</td>
                <td>
                  <button>Edit</button>
                  <button onClick={() => handleDelete(employee.id)}>
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;
