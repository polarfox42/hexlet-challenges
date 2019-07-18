// Счастливым билетом называют такой билет с шестизначным номером, где сумма
// первых трех цифр равна сумме последних трех.
// Например, билет с номером 385916 - счастливый, так как 3 + 8 + 5 = 9 + 1 + 6
// isHappyTicket.js
// Напишите и экспортируйте по умолчанию функцию, проверяющую является ли
// номер счастливым (номер может быть как числового, так и строкового типа:
//   см. примеры ниже). Функция должна возвращать true, если билет счастливый,
//   или false, если нет.
// Примеры использования:
// import isHappyTicket from './isHappyTicket';
// isHappyTicket(385916); // true
// isHappyTicket(231002); // false
// isHappyTicket(128722); // true
// isHappyTicket('054702'); // true
// Подсказки
// Преобразовать число в строку можно с помощью функции String:
// String(1234); // '1234'
// Преобразовать строку в число можно с помощью функции Number:
// Number('456'); // 456
// Чтобы узнать длину строки, используйте свойство length:
// 'welcome'.length; // 7

const isHappyTicket = (input) => {
  const str = String(input);
  const sum1 = Number(str[0]) + Number(str[1]) + Number(str[2]);
  const sum2 = Number(str[3]) + Number(str[4]) + Number(str[5]);
  return sum1 === sum2;
};

console.log(isHappyTicket(385916));
console.log(isHappyTicket(231002));
console.log(isHappyTicket(128722));
console.log(isHappyTicket('054702'));

export default isHappyTicket;
