// isPowerOfThree.js
// Реализуйте и экспортируйте по умолчанию функцию isPowerOfThree,
// которая определяет, является ли переданное число натуральной степенью тройки.
// Например, число 27 — это третья степень: 3^3, а 81 — это четвёртая: 3^4.
//
// Пример:
// isPowerOfThree(1); // true (3^0)
// isPowerOfThree(2); // false
// isPowerOfThree(9); // true (3^2)

const isPowerOfThree = (number) => {
  if (number === 1) {
    return true;
  }
  while (number >= 3) {
    number = number % 3;
  } if (number === 0) {
    return true;
  } return false;
};

export default isPowerOfThree;

console.log(isPowerOfThree(1));
console.log(isPowerOfThree(2));
console.log(isPowerOfThree(9));
