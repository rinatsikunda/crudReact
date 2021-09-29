import React, { useContext } from "react";
import { connect } from "react-redux";
import { ConfigContext } from "../App.js";
import { deleteEmployee } from "../actions/index.js";
import {updateIcon, deleteIcon} from '../icons.js'

function TableRow(props) {
  

  const context = useContext(ConfigContext);
  const onClickUpdate = (employee) => {
    context.setCurrentEmployeeId(employee.id);
    context.setCurrentEmployeeName(employee.name);
    context.setCurrentEmployeeEmail(employee.email);
    context.setCurrentEmployeeMobile(employee.mobile);
    context.setCurrentEmployeeDepartment(employee.department);
    context.setFormState("update");
    context.setShowForm(true);
  };
  const onClickDelete = (id) => {
    props.deleteEmployee(id);
  };
  const renderList = () => {
    return props.employees.map((employee) => {
      return (
        <>
          <tr key={employee.id}>
            <td className="employee-id">{employee.id}</td>
            <td className="employee-name">{employee.name}</td>
            <td className="employee-email">{employee.email}</td>
            <td className="employee-mobile">{employee.mobile}</td>
            <td className="employee-department">{employee.department}</td>
            <td className="employeei-hire-date">{employee.hireDate}</td>

            <td className="employee-icons">
              <div
                className="employee-update-icon"
                onClick={() => onClickUpdate(employee)}
              >
                {updateIcon}
              </div>
              <div
                className="employee-delete-icon"
                onClick={() => onClickDelete(employee.id)}
              >
                {deleteIcon}
              </div>
            </td>
          </tr>
        </>
      );
    });
  };

  return renderList();
}

const mapStateToProps = (state) => ({
  employees: state.employees,
});

export default connect(mapStateToProps, { deleteEmployee })(TableRow);
