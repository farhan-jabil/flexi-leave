import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const EmployeeManagement = () => {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/admin/employee-manage/get-all")
      .then((response) => response.json())
      .then((data) => {
        setEmployees(data.employee);
        console.log("Employees set:", data.employee);
      })
      .catch((error) => console.error("Error fetching employees:", error));
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/admin/employee-manage/delete/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => {
        setEmployees(employees.filter((employee) => employee._id !== id));
      })
      .catch((error) => console.error("Error deleting employee:", error));
  };

  const handleAddEmployee = () => {
    navigate("/admin/users/add");
  };

  return (
    <div className="relative overflow-x-auto w-[80%] mx-auto mt-10">
      <div className="my-5">
        <button
          onClick={handleAddEmployee}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
        >
          Add Employee <i className="fa-solid fa-plus ml-1"></i>
        </button>
      </div>

      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3">
              Employee Name
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Role
            </th>
            <th scope="col" className="px-6 py-3">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {employees.length > 0 ? (
            employees.map((employee) => (
              <tr key={employee._id} className="bg-white border-b">
                <td className="px-6 py-4">{employee.name}</td>
                <td className="px-6 py-4">{employee.email}</td>
                <td className="px-6 py-4">{employee.role}</td>
                <td className="px-6 py-4 space-x-3">
                  <Link
                    to={`/admin/users/edit/${employee._id}`}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    <i className="fa-regular fa-pen-to-square"></i>
                  </Link>
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => handleDelete(employee._id)}
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center py-4">
                No employees found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeManagement;
