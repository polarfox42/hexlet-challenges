// Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход
// количество минут (прошедших с начала суток) и возвращает строку,
// являющуюся временем в формате чч:мм.
// Пример:
// formattedTime(5); // 00:05
// formattedTime(15); // 00:15
// formattedTime(60); // 01:00
// formattedTime(67); // 01:07
// formattedTime(175); // 02:55
// formattedTime(600); // 10:00
// formattedTime(754); // 12:34
// Подсказки
// Используйте функцию Math.floor(number) для округления до нижней границы

const formattedTime = (time) => {
  let hours = 0;
  let minutes = 0;
  minutes = time % 60;
  hours = (time - minutes) / 60;
  let result = '';
  if (hours === 0) {
    result += '00' + ':';
  } else if (String(hours).length === 1) {
    result += '0' + String(hours) + ':';
  } else {
    result += String(hours) + ':';
  }
  if (minutes === 0) {
    result += '00';
  } else if (String(minutes).length === 1) {
    result += '0' + String(minutes);
  } else {
    result += String(minutes);
  } return result;
};

console.log(formattedTime(5));
console.log(formattedTime(15));
console.log(formattedTime(60));
console.log(formattedTime(67));
console.log(formattedTime(175));
console.log(formattedTime(600));
console.log(formattedTime(754));

export default formattedTime;
