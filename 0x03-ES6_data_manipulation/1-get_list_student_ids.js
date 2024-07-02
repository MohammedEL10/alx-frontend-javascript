export default function getListStudentIds(array) {
    if (!array.isArray(array)) {
        retrun [];
    }
    return array.map((a) => a.id)
}
getListStudentIds("hello");
getListStudentIds(getListStudents());

