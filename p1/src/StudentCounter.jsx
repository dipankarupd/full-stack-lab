import React from "react";

function StudentCounter({ students }) {
  // Calculate the counts for distinction and first class students
  const distinctionCount = students.filter(student => student.percentage >= 85).length;
  const firstClassCount = students.filter(
    student => student.percentage >= 60 && student.percentage < 85
  ).length;

  return (
    <div>
      <h2>Analysis Results</h2>
      <p>Number of Students with Distinction (85% and above): {distinctionCount}</p>
      <p>Number of Students with First Class (60% to 84%): {firstClassCount}</p>
    </div>
  );
}

export default StudentCounter;
