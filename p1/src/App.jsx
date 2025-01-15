import React from "react";
import StudentCounter from "./StudentCounter";
import "./App.css";
import { students } from "./cores/Student";
function App() {
  return (
    <div className="App">
      <h1>Student Result Analysis</h1>
      <div className="container">
        <div className="student-list">
          <h2>Student List</h2>
          <ul>
            {students.map((student, index) => (
              <li key={index}>
                {student.name} - {student.percentage}%
              </li>
            ))}
          </ul>
        </div>
        <div className="analysis-result">
          <StudentCounter students={students} />
        </div>
      </div>
    </div>
  );
}

export default App;
