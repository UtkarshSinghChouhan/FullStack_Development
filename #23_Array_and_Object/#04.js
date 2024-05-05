const students = [
    {
        id: 1,
        firstName: "John",
        lastName: "Doe",
        age: 20,
        grade: "A"
    },
    {
        id: 2,
        firstName: "Jane",
        lastName: "Smith",
        age: 22,
        grade: "B"
    },
    {
        id: 3,
        firstName: "Bob",
        lastName: "Johnson",
        age: 19,
        grade: "A"
    }
];

// a. Add a Student
function addStudent(newStudent) {
    students.push(newStudent);
}

// b. Update Student Information
function updateStudent(id, updatedInfo) {
    const index = students.findIndex(student => student.id === id);
    if (index !== -1) {
        students[index] = { ...students[index], ...updatedInfo };
    }
}

// c. Delete a Student
function deleteStudent(id) {
    const index = students.findIndex(student => student.id === id);
    if (index !== -1) {
        students.splice(index, 1);
    }
}

// d. List All Students
function listAllStudents() {
    students.forEach(student => {
        console.log(`${student.id}: ${student.firstName} ${student.lastName}, Age: ${student.age}, Grade: ${student.grade}`);
    });
}

// e. Find Students by Grade
function findStudentsByGrade(grade) {
    return students.filter(student => student.grade === grade);
}

// f. Calculate Average Age
function calculateAverageAge() {
    const totalAge = students.reduce((sum, student) => sum + student.age, 0);
    return totalAge / students.length;
}

// Testing the functions
console.log("Initial Students:");
listAllStudents();

console.log("\nAdding a new student:");
addStudent({ id: 4, firstName: "Alice", lastName: "Brown", age: 21, grade: "B" });
listAllStudents();

console.log("\nUpdating student with id 2:");
updateStudent(2, { age: 23 });
listAllStudents();

console.log("\nDeleting student with id 3:");
deleteStudent(3);
listAllStudents();

console.log("\nFinding students with grade 'A':");
console.log(findStudentsByGrade("A"));

console.log("\nAverage Age of Students:");
console.log(calculateAverageAge());
