export default function getListStudentIds() {
    return [
        {firstName: 'Guillaume', id: 1, location: 'San Francisco'},
        {firstName: 'James', id: 2, location: 'Columbia'},
        {firstName: 'Serena', id: 5, location: 'San Francisco'}

    ]
}
const studentList = getListStudentIds();
console.log(studentList);