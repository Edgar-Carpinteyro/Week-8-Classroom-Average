# Week-8-Classroom-Average
### Objective: 
In this assignment, you will build a basic web application for managing student grades. You will use JavaScript to create, display, and update student data within an HTML table. Additionally, you will calculate and display the classroom's average grade.

### Instructions
#### Step 1: Project Setup
1. Create a new web development project using a code editor or online IDE.
2. Set up the project structure with the following files and folders:
- index.html to display the student data and classroom average.
- styles.css for styling the HTML elements.
- studentData.js to store an array of student information.
- studentTable.js for creating and updating the student table.
- calculateClassroomAverage.js for calculating the classroom average grade.
- main.js for the main application logic.
3. Link the necessary CSS and JavaScript files to your index.html file.

#### Step 2: Data Setup
1. In the studentData.js file, create an array of student objects. Each student should have the following properties:
- id: A unique student identifier.
- name: The student's name.
- address: The student's address.
- averageGrade: The student's initial average grade.

#### Step 3: Build the Student Table
1. In the studentTable.js file, create a function named renderStudentTable that takes two parameters:
- table (a reference to the HTML table where the data will be displayed).
- data (the student data from studentData.js).
2. Use a for loop to iterate through the data array and dynamically create table rows to display each student's information.
3. Use DOM manipulation to insert the student data into the table cells, including their ID, name, address, and an editable input field for their average grade.
4. Implement an onchange event handler that calls a function named updateGrade when a student's average grade is modified. This function will update the student's grade and recalculate the classroom average.

#### Step 4: Update Student Grades
1. In the studentTable.js file, create a function named updateGrade that takes an input element as a parameter. This function will be responsible for updating a student's grade.
2. Extract the student ID and new grade from the input element.
3. Update the student's average grade in the studentData array.
4. Recalculate the classroom average grade by calling the calculateClassroomAverage function from the calculateClassroomAverage.js module.
5. Update the classroom average display in the HTML table.

#### Step 5: Calculate Classroom Average
1. In the calculateClassroomAverage.js file, create a function named calculateClassroomAverage that takes the studentData as a parameter.
2. Use a loop to iterate through the student data and calculate the average of all student grades.
3. Return the classroom average grade.

#### Step 6: Main Application Logic
1. In the main.js file, import the necessary functions and modules:
- renderStudentTable and updateGrade from studentTable.js.
- calculateClassroomAverage from calculateClassroomAverage.js.
- studentData from studentData.js.
2. Add an event listener for the DOMContentLoaded event to ensure the HTML elements are ready.
3. Initialize the table with student data using the renderStudentTable function.
4. Calculate and display the initial classroom average using the calculateClassroomAverage function.
5. Set up an event listener to detect changes in student grades and trigger the updateGrade function.

#### Step 7: Styling
1. Apply CSS styles to make the student table and classroom average visually appealing. You can use the styles.css file for this purpose.

#### Step 8: Testing and Submission
1. Test your web application to ensure it functions correctly. Verify that you can add and modify student grades, and that the classroom average is updated accordingly.
2. Create a README.md file that provides instructions on how to run your project.
3. Host your project on a platform like GitHub and submit the repository link.
