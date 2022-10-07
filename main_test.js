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

const addHistoryGrade = (finalMathGrade, historyScore) => {
    const finalHistoryGrade = finalMathGrade.history = historyScore
    return finalHistoryGrade
}

const addScienceGrade = (finalHistoryGrade, scienceScore) => {
    const finalScienceGrade = finalHistoryGrade.science = scienceScore
    return finalScienceGrade
}

createStudent("Johnny Smith", 8)
addMathGrade(johnnySmith, "B")
addHistoryGrade(johnnySmith, "C")
addScienceGrade(johnnySmith, "A")

console.log(johnnySmith)