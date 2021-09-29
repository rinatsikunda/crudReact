import React, { useContext } from "react";
import { connect } from "react-redux";
import { ConfigContext } from "../App.js";
import { addEmployee, updateEmployee } from "../actions/index.js";
import {closeIcon} from "../icons"

function EmployeeForm(props) {



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
