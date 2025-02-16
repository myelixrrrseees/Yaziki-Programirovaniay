/*1. Написать программу, которая содержит не менее 5-и переменных (для этого
используйте ключевое слов let). Присвоить им значения разных типов и с помощью
функции typeof() вывести тип каждой переменной на экран.*/

let name = "Иван";
let age = 25;
let isStudent = true;
let height = null;
let city;

console.log("Тип переменной name:", typeof name);
console.log("Тип переменной age:", typeof age);
console.log("Тип переменной isStudent:", typeof isStudent);
console.log("Тип переменной height:", typeof height);
console.log("Тип переменной city:", typeof city);

console.log("")

/*2. Создайте и присвойте значения двум переменным (для этого используйте ключевое
слов let). С помощью операторов сравнения проверить, удовлетворяет ли первая
переменная следующим условиям:
o равна второй;
o меньше второй;
o меньше или равна второй;
o больше второй.*/

let a = 10;
let b = 20;

console.log("a == b:", a == b);
console.log("a < b:", a < b);
console.log("a <= b:", a <= b);
console.log("a > b:", a > b);

console.log("")

/*3. Создайте 3 переменные с использованием ключевого слова let с идентификаторами:
a, b, c.
o Переменной a присвойте значение false.
o Переменной b присвойте значение null.
o Переменная c должна принимать значение undefined.
o Отобразите значение 3-х переменных последовательно в консоли.
*/

a = false;
b = null;
let c; // Undefined (не определено)

console.log("a:", a); 
console.log("b:", b); 
console.log("c:", c);

console.log("")

/*4. Проверьте каким будет результат следующих операций. Выведите его на экран и
объясните, как он получился.
o "1" + 2 + 3
o 1 + 2 + "3"
o "1" – 2
o "1" + – 2
o "1" + "1" – "1"
o "foo" + – "bar"
o 0 == "0"
o 0.5 + 0.1 == 0.6
o 0.1 + 0.2 == 0.3
o true + true + true == 3
o true == 1
o true === 1
o 1 < 2 < 3
o 3 > 2 > 1
o 9007199254740991 + 1 == 9007199254740991 + 2
o Math.sqrt(-1) == Math.sqrt(-1)*/

console.log('"1" + 2 + 3:', "1" + 2 + 3); // "123"
console.log('1 + 2 + "3":', 1 + 2 + "3"); // "33"
console.log('"1" - 2:', "1" - 2); // -1
console.log('"1" + -2:', "1" + -2); // "1-2"
console.log('"1" + "1" - "1":', "1" + "1" - "1"); // 11
console.log('"foo" + - "bar":', "foo" + - "bar"); // NaN
console.log('0 == "0":', 0 == "0"); // true
console.log('0.5 + 0.1 == 0.6:', 0.5 + 0.1 == 0.6); // true
console.log('0.1 + 0.2 == 0.3:', 0.1 + 0.2 == 0.3); // false
console.log('true + true + true == 3:', true + true + true == 3); // true
console.log('true == 1:', true == 1); // true
console.log('true === 1:', true === 1); // false
console.log('1 < 2 < 3:', 1 < 2 < 3); // true
console.log('3 > 2 > 1:', 3 > 2 > 1); // false
console.log('9007199254740991 + 1 == 9007199254740991 + 2:', 9007199254740991 + 1 == 9007199254740991 + 2); // false
console.log('Math.sqrt(-1) == Math.sqrt(-1):', Math.sqrt(-1) == Math.sqrt(-1)); // false

console.log("")

/*5. Создать 4 переменные с использованием ключевого слова let с именами str1, str2,
str3, concatenation.
o Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
o Локальной переменной concatenation присвоить результат конкатенации 3-х
строк: str1, str2, str3.
o Вывести в консоль содержимое переменной concatenation.*/

let str1 = 'Кто ';
let str2 = 'ты ';
let str3 = 'такой?';

let concatenation = str1 + str2 + str3;

console.log(concatenation);

console.log("")

/*6. Создайте переменные str = "20" и a = 5. Проверьте каким будет результат следующих
операций. Объясните, как он получился.
o console.log(str + a);
o console.log(str - a);
o console.log(str * "2");
o console.log(str / 2);*/

let str = "20";
a = 5;

console.log(str + a);  // "205"
console.log(str - a);  // 15
console.log(str * "2"); // 40
console.log(str / 2);   // 10

console.log("")