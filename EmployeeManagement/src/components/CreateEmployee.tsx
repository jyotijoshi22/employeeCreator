import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";

const CreateEmployee = () => {
  //const { id } = useParams();
  const [employee, setNewEmployee] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    emailId: "",
    contactNumber: "",
    address: "",
    status: "",
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setNewEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  // Handle updating the latest details to currentEmployee
  const formatObj = () => {
    const finalObj = {
      ...employee,

      middleName: employee.middleName?.length == 0 ? null : employee.middleName,
    };

    return finalObj;
  };
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const finalObj = formatObj();
    axios.post("/employee", finalObj).then(() => {
      return setNewEmployee({
        firstName: "",
        middleName: "",
        lastName: "",
        emailId: "",
        contactNumber: "",
        address: "",
        status: "",
      });
    });
  };

  return (
    <div className="container">
      <h2> EMPLOYEE DETAILS</h2>
      <div className="row">
        <div className="card col-md-6 offset-md-3  offset-md-3">
          <h1> Personal Information</h1>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              {/* First Name */}
              <div className="form-group">
                <label htmlFor="firstName">First Name:</label>
                <input
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  className="form-control"
                  value={employee.firstName}
                  onChange={handleChange}
                />
              </div>
              {/* Second Name */}
              <div className="form-group">
                <label htmlFor="MiddleName">Middle Name:</label>
                <input
                  type="text"
                  placeholder="Middle Name"
                  name="middleName"
                  className="form-control"
                  value={employee.middleName}
                  onChange={handleChange}
                />
              </div>

              {/* Last Name */}
              <div className="form-group">
                <label htmlFor="LastName">Last Name:</label>
                <input
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  className="form-control"
                  value={employee.lastName}
                  onChange={handleChange}
                />
              </div>
              {/* contact Details  */}
              <h3> Contact Details</h3>
              {/* email */}
              <div className="form-group">
                <label htmlFor="Email Address">Email Address:</label>
                <input
                  type="text"
                  placeholder="employee@gmail.com"
                  name="emailId"
                  className="form-control"
                  value={employee.emailId}
                  onChange={handleChange}
                />
              </div>

              {/* Australian Mobile number */}
              <div className="form-group">
                <label htmlFor="Mobile">Mobile Number:</label>
                <h6> Must be an Australian number</h6>
                <select name="countryCode">
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                  <option value="+61">+61</option>
                </select>
                <input
                  type="tel"
                  placeholder="44444444"
                  name="contactNumber"
                  className="form-control"
                  value={employee.contactNumber}
                  onChange={handleChange}
                />
              </div>

              {/* Residential Address */}
              <div className="form-group">
                <label htmlFor="Residential Address">
                  Residential Address:
                </label>
                <input
                  type="text"
                  placeholder="Address"
                  name="residentialAddress"
                  className="form-control"
                  value={employee.address}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <input type="submit" className="btn btn-primary" />
              </div>

              {/* to do  employee status contract or permanent */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEmployee;
