function getStudentsByLocation (array, city) {
    return array.filter((a) => a.location === city);
}
const students = getListStudents();
getStudentsByLocation(students, 'San Francisc');
