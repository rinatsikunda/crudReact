export const addEmployee = (employee) => {
  return (dispatch) => {
    return dispatch({
      type: "EMPLOYEE_ADD",
      payload: employee,
    });
  };
};
export const updateEmployee = (employee) => {
  return (dispatch) => {
    return dispatch({
      type: "EMPLOYEE_UPDATE",
      payload: employee,
    });
  };
};
export const deleteEmployee = (id) => {
  return (dispatch) => {
    return dispatch({
      type: "EMPLOYEE_DELETE",
      payload: id,
    });
  };
};
