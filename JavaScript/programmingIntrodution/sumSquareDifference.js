// Сумма квадратов первых десяти натуральных чисел это
// 1^2 + 2^2 + 3^2 + ... + 10^2 = 385.
// Квадрат суммы первых десяти натуральных чисел это
// (1 + 2 + 3 + ... + 10)^2 = 55^2 = 3025.
// Разница между квадратом суммы и суммой квадратов первых десяти
// натуральных чисел: 3025 − 385 = 2640.
//
// Напишите функцию sumSquareDifference, которая принимает аргумент n и
// возвращает разницу между квадратом суммы и суммой квадратов первых
// n натуральных чисел.

const sumSquareDifference = (number) => {
  let sum = 0;
  for (iter = 1; iter <= number; iter += 1) {
    sum += iter ** 2;
  } let square_sum = 0;
  let square = 0;
  for (iter = 1; iter <= number; iter += 1) {
    square_sum += iter;
  } square = square_sum ** 2;
  return square - sum;
}

console.log(sumSquareDifference(10));
console.log(sumSquareDifference(3));
