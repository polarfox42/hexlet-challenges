// Реализуйте и экспортируйте по умолчанию функцию invertCase, которая
// меняет в строке регистр каждой буквы на противоположный.
// invertCase('Hello, World!'); // hELLO, wORLD!
// invertCase('I loVe JS');     // i LOvE js

const invertCase = (text) => {
  const len = text.length;
  let resultText = '';
  for (counter = 0; counter < len; counter += 1) {
    if (text[counter].toUpperCase() === text[counter]) {
      resultText += text[counter].toLowerCase();
    } else {
      resultText += text[counter].toUpperCase();
    }
  } return resultText;
};

export default invertCase;

console.log(invertCase('Hello, World!')); // hELLO, wORLD!
console.log(invertCase('I loVe JS'));     // i LOvE js
