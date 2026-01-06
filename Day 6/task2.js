// Sort students by marks in descending order.

let students = [
  { name: "Aman", marks: 78 },
  { name: "Riya", marks: 92 },
  { name: "Karan", marks: 85 },
];

for (let i = 0; i < students.length; i++) {
  for (let j = i + 1; j < students.length; j++) {
    if (students[i].marks < students[j].marks) {
      let temp = students[i];
      students[i] = students[j];
      students[j] = temp;
    }
  }
}

console.log(students);
