// Find students who scored less than 40 in any subject.

let students = [
  { name: "Aman", marks: { math: 40, english: 40, science: 40 } },
  { name: "Riya", marks: { math: 85, english: 90, science: 88 } }
];

let failedStudents = []

for (let i = 0; i < students.length; i++) {
    let marks = students[i].marks
    let failed = false
    
    for(let subjects in marks){
        if(marks[subjects] < 40){
            failed = true
            break
        }
    }

    if(failed){
        failedStudents.push(students[i].name)
    }

}

if(failedStudents.length === 0 ){
    console.log("All students are passed..!!")
}else{
    console.log("Failed Students:", failedStudents)
}