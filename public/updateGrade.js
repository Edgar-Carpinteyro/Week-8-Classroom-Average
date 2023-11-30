import { students } from "./studentData.js";
import { renderUpdatedTable } from "./index.js";

function updateGrade() {
    let studentId = parseInt(prompt("Please enter the students' ID:"))
    let found = false;
  
    for (let student of students){
      
      if (student.id === studentId){
        let studentNewGrade = parseFloat(prompt("Enter the new grade:"));
         student.averageGrade = studentNewGrade;
         found = true;
         break;
      } 
    }
  
    if(!found) {
      alert("ID not found");
    }
  
    renderUpdatedTable();
    console.log(students);
  }
  
  
  const studentButton = document.getElementById("student-btn");
  studentButton.addEventListener("click", updateGrade);

  export {updateGrade};