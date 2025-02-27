// Способ 1: Функция выводит сообщение с результатом
function subtractAndPrint(a, b) {
    let result = a - b;
    console.log(`Результат разности: ${result}`);
}

subtractAndPrint(10, 5);


// Способ 2: Функция возвращает результат, а вывод в основной программе
function subtract(a, b) {
    return a - b;
}

let result = subtract(10, 5);
console.log(`Результат разности: ${result}`);
