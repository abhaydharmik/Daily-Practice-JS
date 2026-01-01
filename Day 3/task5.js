// Find student with highest marks.

let students = [
  {
    name: "Briann",
    marks: 95,
  },
  {
    name: "Domnic",
    marks: 88,
  },
  {
    name: "Zoro",
    marks: 90,
  },
  {
    name: "Will",
    marks: 98,
  },
];

let highMarks = students[0];

for (let i = 1; i < students.length; i++) {
  if (students[i].marks > highMarks.marks) {
    highMarks = students[i];
  }
}

console.log(highMarks);
