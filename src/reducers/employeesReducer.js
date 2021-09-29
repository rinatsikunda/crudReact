const initialState = {
  employees: [
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "EMPLOYEE_ADD":
      return { ...state, employees: state.employees.concat(action.payload) };
    case "EMPLOYEE_UPDATE": {
      return {
        ...state,
        employees: state.employees.map((content, i) =>
          content.id === action.payload.id
            ? {
                ...content,
                name: action.payload.name,
                email: action.payload.email,
                mobile: action.payload.mobile,
                department: action.payload.department,
              }
            : content
        ),
      };
    }
    case "EMPLOYEE_DELETE":
      return {
        ...state,
        employees: state.employees.filter(
          (employee) => employee.id !== action.payload
        ),
      };
    default:
      return state;
  }
};


export default reducer;   