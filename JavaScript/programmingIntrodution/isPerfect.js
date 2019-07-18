// Создайте функцию isPerfect, которая принимает число и возвращает true,
// если оно совершенное, и false — в ином случае.
// Совершенное число — это положительное целое число, равное сумме его
// положительных делителей (не считая само число). Например, 6 — идеальное число,
// потому что 6 = 1 + 2 + 3.

const isPerfect = (num) => {
  let sum = 0;
    let iter = Math.floor(num / 2);
    for (; iter >= 1; iter -= 1) {
      if (num % iter === 0) {
        sum += iter;
      }
    }if (sum === num) {
      return true;
    } return false;
  };

  console.log(isPerfect(6));
  console.log(isPerfect(13));
