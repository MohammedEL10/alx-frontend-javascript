interface Student {
    firstName: string;
    lastName:string;
    age: number;
    location: string;
}
let Student1: Student = {
    firstName: "mohammed",
    lastName: "elhathout",
    age: 23,
    location: "marrakech",
};
let Student2: Student = {
    firstName: "ayoub",
    lastName: "elhathout",
    age: 21,
    location: "marrakech",
};
let studentsList: Student[] = [Student1, Student2];
const table = document.createElement('table');
document.body.appendChild(table);
studentsList.forEach((student) => {
  const row = table.insertRow();
  row.insertCell().textContent = student.firstName;
  row.insertCell().textContent = student.location;
});