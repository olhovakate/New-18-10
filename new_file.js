let value1 = 45;
let value2 = Math.floor(
  Math.random() * 80
); /*каждый раз выдает нам новое рандомное число до 80 */
let result = value1 + value2 / 5 + 17; /*по приоритету первое мы делаем деление 
и затем прибавление слева направо ,value2/5 + value1 + 17*/

console.log(`value1: ${value1}`);
console.log(`value2 (случайное число): ${value2}`);
console.log(`Результат: ${result}`);
