import { students } from "./studentData.js";
import { calculateClassAverage } from "./classAvg.js";
import { updateGrade } from "./updateGrade.js";
import { renderStudentTable } from "./studentTable.js";
import { clearTable } from "./studentTable.js";

//The function clears the information in the table and fills it up with the new information
function renderUpdatedTable() {
  clearTable();
  renderStudentTable();
}

export {renderUpdatedTable}



