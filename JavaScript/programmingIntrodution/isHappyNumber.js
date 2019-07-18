// Назовем счастливыми числами те, которые в результате ряда преобразований вида
// "сумма квадратов цифр" превратятся в единицу. Например:
// 7   => 7^2 = 49,
// 49  => 4^2 + 9^2 = 16 + 81 = 97,
// 97  => 9^2 + 7^2 = 81 + 49 = 130,
// 130 => 1^2 + 3^2 + 0^2 = 10,
// 10  => 1^2 + 0^2 = 1.
// Вывод: исходное число 7 - счастливое.
// isHappyNumber.js
// Реализуйте и экспортируйте по умолчанию функцию, которая должна вернуть true,
// если число счастливое, и false, если нет. Количество итераций процесса поиска
// необходимо ограничить числом 10.
// Подсказки
// Воспользуйтесь вспомогательной функцией sumOfSquareDigits, которая принимает
// на вход число и возвращает "сумму квадратов цифр" этого числа.
// Длина строки str находится так: str.length

const sumOfSquareDigits = (number) => {
  const numberString = String(number);
  const len = numberString.length;
  let answer = 0;
  for (let iter = 0; iter < len; iter += 1) {
    answer += Number(numberString[iter]) ** 2;
  } return answer;
};

const isHappyNumber = (number) => {
  let result = number;
  for (let iter = 0; iter < 10; iter += 1) {
    result = sumOfSquareDigits(result);
  } if (result === 1) {
    return true;
  } return false;
};

export default isHappyNumber;

console.log(isHappyNumber(7));
console.log(isHappyNumber(2));
