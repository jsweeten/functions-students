const createStudent = (studentName, gradeLevel) => {
    const student = {
        name: studentName,
        grade: gradeLevel
    }
    return student
}

const addMathGrade = (student, mathScore) => {
    const finalMathGrade = student.math = mathScore
    return finalMathGrade
}

const addHistoryGrade = (student, historyScore) => {
    const finalHistoryGrade = student.history = historyScore
    return finalHistoryGrade
}

const addScienceGrade = (student, scienceScore) => {
    const finalScienceGrade = student.science = scienceScore
    return finalScienceGrade
}

let newStudent = createStudent("Johnny Smith", 8)
addMathGrade(newStudent, "B")
addHistoryGrade(newStudent, "C")
addScienceGrade(newStudent, "A")

console.log(newStudent)