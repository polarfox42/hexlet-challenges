// Напишите функцию diff, которая принимает два угла (integer), каждый от 0 до 360,
// и возвращает наименьшую разницу между ними.

const diff = (one, two) => {
  if (one > two) {
    one, two = two, one;
  }
  const difference = two - one;
  if (difference > 180) {
    return 360 - difference;
  }
  return difference;
};

console.log(diff(30, 270));
