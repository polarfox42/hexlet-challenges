// Реализуйте и экспортируйте функцию по умолчанию, которая переворачивает
// строку задом наперед, используя рекурсию.
// Например:
// import reverse from './reverse';
// reverse('str');    // rts
// reverse('hexlet'); // telxeh
// Попробуйте решить эту задачу, используя рекурсивный процесс.
// Для этого вам понадобится метод substr.
// Подсказки
// Чтобы узнать длину строки, используйте свойство length:
// 'welcome'.length; // 7
// Чтобы получить подстроку из строки, используйте метод substr:
// 'foo'.substr(1, 2); // 'oo';

const reverse = (text) => {
  const len = text.length;
  if (len === 1) {
    return text;
  } else {
    return text[len - 1] + reverse(text.substr(0, len - 1));
  }
};

console.log(reverse('str'));
console.log(reverse('hexlet'));

export default reverse;
