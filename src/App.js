import "./App.css";
import React, { useState } from "react";

import EmployeesTable from "./components/employeesTable";
import TableHeader from "./components/tableHeader";
import EmployeeForm from "./components/employeeForm";

export const ConfigContext = React.createContext();

function App() {
  const [showForm, setShowForm] = useState(false);
  const [formState, setFormState] = useState("");
  const [currentEmployeeId, setCurrentEmployeeId] = useState("");
  const [currentEmployeeName, setCurrentEmployeeName] = useState("");
  const [currentEmployeeEmail, setCurrentEmployeeEmail] = useState("");
  const [currentEmployeeMobile, setCurrentEmployeeMobile] = useState("");
  const [currentEmployeeDepartment, setCurrentEmployeeDepartment] =
    useState("");
  return (
    <>
      <ConfigContext.Provider
        value={{
          formState,
          setFormState,
          showForm,
          setShowForm,
          currentEmployeeId,
          setCurrentEmployeeId,
          currentEmployeeName,
          setCurrentEmployeeName,
          currentEmployeeEmail,
          setCurrentEmployeeEmail,
          currentEmployeeMobile,
          setCurrentEmployeeMobile,
          currentEmployeeDepartment,
          setCurrentEmployeeDepartment,
        }}
      >
        <div className="main-app">
          <div className="main-header">React Crud </div>
        </div>
        <div className="table-wrapper">
          <table>
            <TableHeader />
            <tbody>
              <EmployeesTable />
            </tbody>
            <EmployeeForm />
          </table>
        </div>
      </ConfigContext.Provider>
    </>
  );
}

export default App;
