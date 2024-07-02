export default function getStudentIdsSum(array) {
    return array.reduce((sum, current) => sum + current.id, 0);   
}
const students = getListStudents();
const value = getStudentIdsSum(students);
getStudentIdsSum(students);
value;
