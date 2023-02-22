import axios from "axios";
const employee_base_url = "http://localhost:8080/employee";

class EmployeeService {
  getEmployees() {
    return axios.get(employee_base_url);
  }
}
export default new EmployeeService();
