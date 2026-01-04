// Merge users with same ID and sum their scores.

let data = [
  { id: 1, score: 10 },
  { id: 2, score: 20 },
  { id: 1, score: 15 },
  { id: 2, score: 5 },
];

let merged = {};

for (let i = 0; i < data.length; i++) {
  let id = data[i].id;

  if (merged[id]) {
    merged[id] += data[i].score;
  } else {
    merged[id] = data[i].score
  }
}

let result = [];

for (let id in merged) {
  result.push({ id: Number(id), totaScore: merged[id] });
}

console.log(result)
