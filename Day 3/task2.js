// Find the longest word in a sentence.

let sentence = "Learning JavaScript improves problem solving skills";
let words = sentence.split(" ");

let longestWord = words[0];

for (let i = 0; i < words.length; i++) {
  if (words[i.length] > longestWord.length) {
    longestWord = words[i];
  }
}

console.log(longestWord);
