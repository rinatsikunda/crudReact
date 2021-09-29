import React, { useContext } from "react";
import { ConfigContext } from "../App.js";
import {addIcon} from '../icons.js'

function TableHeader() {

  const context = useContext(ConfigContext);
  const onClickAdd = () => {
    context.setFormState("add");
    context.setShowForm(true);
  };
  return (
    <>
      <thead>
        <tr>
          <td>Employee #</td>
          <td>Name</td>
          <td>Email</td>
          <td>Mobile</td>
          <td>Department</td>
          <td>Hire Date</td>

          <td className="employee-add-icon" onClick={onClickAdd}>
            {addIcon}
          </td>
        </tr>
      </thead>
    </>
  );
}
export default TableHeader;
