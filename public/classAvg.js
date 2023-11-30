import { students } from "./studentData.js";

//Creates a new heading element that will display the class average
let classAverageText = document.createElement("H3");

function calculateClassAverage(){
  //Begins a counter
  let average = 0;

  for (let student of students) {
    
    //Adds the student averages and divides it by the number of students
    average += student.averageGrade / students.length;
  }
  console.log(average);

  //Sets the text content in the element (heading 3) that was created
  classAverageText.textContent = `The classroom average is ${average}`;

  //Appends the element (heading 3) to the body of the document
  document.body.appendChild(classAverageText);
}

//The code within the function calculateClassAverage() runs when the button is clicked.
const classroomButton = document.getElementById("class-btn");
classroomButton.addEventListener('click', calculateClassAverage);

export {calculateClassAverage};