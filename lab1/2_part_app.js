/*4. Написать цикл while, который будет выводить на экран все нечетные числа от 0 до
50. Сделать то же самое с помощью цикла for.*/

let i = 0;
while (i <= 50) {
    if (i % 2 !== 0) {
        console.log(i);
    }
    i++;
}

for (let i = 0; i <= 50; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

console.log("")

/*5. Вывести сумму всех целых чисел от 1 до 15, исключив из общей суммы числа 5 и 7.*/

let sum = 0;

// Перебираем все числа от 1 до 15
for (let i = 1; i <= 15; i++) {
    if (i !== 5 && i !== 7) {  // Исключаем 5 и 7 из суммы
        sum += i;
    }
}

console.log("Сумма всех целых чисел от 1 до 15, исключая 5 и 7:", sum);

console.log("")

/*6. Написать код возведения х в степень y, используя цикл while.*/

let x = 2;
let y = 3;

let result = 1;  // Переменная для хранения результата

while (y > 0) {
    result *= x;  // Умножаем результат на x
    y--;  // Уменьшаем степень
}

console.log(`Результат возведения x в степень y: ${result}`);
