import { students } from "./studentData.js";
import { calculateClassAverage } from "./classAvg.js";
import { updateGrade } from "./updateGrade.js";

const studentTable = document.getElementById("student-table");
const tableBody = document.getElementById("table-body");


function renderStudentTable() {
   
    //Creates all cells
    for (let i = 0; i < students.length; i++) {
      
      //Creates a table row
      const row = document.createElement("tr");

      for (let key in students[i]) {
        if (students[i].hasOwnProperty(key)) {
          //Creates the table data cell
            const cell = document.createElement("td");

            //Gets the value of each key and creates a text node, which is used to provide text to an element
            const cellText = document.createTextNode(students[i][key]);

            //The text is appended to the cells
            cell.appendChild(cellText);

            //The cells are appended to the row
            row.appendChild(cell);
        }
      }
  
      //The row is added to the end of the table body
      tableBody.appendChild(row);
    }
  
    //Incorporates the table body into the table
    studentTable.appendChild(tableBody);
}

renderStudentTable();
export {renderStudentTable};

function clearTable() {
  while(tableBody.firstChild) {
    tableBody.removeChild(tableBody.firstChild)
  }
}

export {clearTable};