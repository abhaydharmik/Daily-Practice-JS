// Calculate total marks for each student.

let students = [
  { name: "Aman", marks: { math: 70, english: 65, science: 80 } },
  { name: "Riya", marks: { math: 85, english: 90, science: 88 } }
];

let result = []

for (let i = 0; i < students.length; i++) {
    let total = 0
    let marks = students[i].marks    

    for (let subjects in marks) {
       total = total + marks[subjects]
    }

    result.push({name: students[i].name, total: total})
}

console.log(result)