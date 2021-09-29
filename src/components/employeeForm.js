import React, { useContext } from "react";
import { connect } from "react-redux";
import { ConfigContext } from "../App.js";
import { addEmployee, updateEmployee } from "../actions/index.js";

function EmployeeForm(props) {
  const closeIcon = (
    <>
      {" "}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        fill="currentColor"
        class="bi bi-x-square"
        viewBox="0 0 16 16"
      >
        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"></path>
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"></path>
      </svg>
    </>
  );

  const context = useContext(ConfigContext);

  const onCloseBtnClick = () => {
    context.setCurrentEmployeeId("");
    context.setCurrentEmployeeName("");
    context.setCurrentEmployeeEmail("");
    context.setCurrentEmployeeMobile("");
    context.setCurrentEmployeeDepartment("");
    context.setShowForm(false);
    context.setFormState("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isAdd = context.formState === "add";

    const today = new Date();
    const date =
      today.getDate() +
      "/" +
      (today.getMonth() + 1) +
      "/" +
      today.getFullYear();

    const employee = {
      id: isAdd
        ? Math.floor(100000 + Math.random() * 900000)
        : context.currentEmployeeId,
      name: context.currentEmployeeName,
      email: context.currentEmployeeEmail,
      mobile: context.currentEmployeeMobile,
      department: context.currentEmployeeDepartment,
      hireDate: isAdd ? date : "",
    };

    isAdd ? props.addEmployee(employee) : props.updateEmployee(employee);

    onCloseBtnClick();
  };

  return (
    <div
      className="form-popup"
      style={{ display: context.showForm ? "block" : "none" }}
    >
      <div className="formContainer">
        <button type="button" className="btn-close" onClick={onCloseBtnClick}>
          {closeIcon}
        </button>
        <form onSubmit={handleSubmit}>
          <div className="formTitle">Add New Employee</div>

          <div className="formInput">
            <label for="Name">
              <b>Full Name:</b>
            </label>
            <input
              value={context.currentEmployeeName}
              onChange={(e) => {
                context.setCurrentEmployeeName(e.target.value);
              }}
            />
          </div>

          <div className="formInput">
            <label for="Email">
              <b>Email:</b>
            </label>
            <input
              value={context.currentEmployeeEmail}
              onChange={(e) => {
                context.setCurrentEmployeeEmail(e.target.value);
              }}
            />
          </div>

          <div className="formInput">
            <label for="Mobile">
              <b>Mobile:</b>
            </label>
            <input
              value={context.currentEmployeeMobile}
              onChange={(e) => {
                context.setCurrentEmployeeMobile(e.target.value);
              }}
            />
          </div>

          <div className="formInput">
            <label for="Department">
              <b>Department:</b>
            </label>
            <select
              value={context.currentEmployeeDepartment}
              onChange={(e) => {
                context.setCurrentEmployeeDepartment(e.target.value);
              }}
            >
              <option hidden disabled selected></option>
              <option value="R&D">R&amp;D</option>
              <option value="Sales &amp; Marketing">Sales and Marketing</option>
              <option value="Human Resource Management">
                Human Resource Management
              </option>
              <option value="Accounting and Finance">
                Accounting and Finance
              </option>
            </select>
          </div>

          <button type="submit" class="submitFormBtn ">
            {context.formState === "update"
              ? "Update Employee"
              : "Add Employee"}
          </button>
        </form>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  employees: state.employees,
});

export default connect(mapStateToProps, { addEmployee, updateEmployee })(
  EmployeeForm
);
