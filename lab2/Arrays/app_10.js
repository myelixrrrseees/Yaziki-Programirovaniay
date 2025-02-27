// Создание массива с случайными значениями
let array = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
console.log("Массив до замены максимального и минимального значения:", array);
console.log("");

// Нахождение максимального и минимального значения
let max = Math.max(...array);
let min = Math.min(...array);

// Нахождение индексов максимального и минимального значения
let maxIndex = array.indexOf(max);
let minIndex = array.indexOf(min);

// Поменять местами максимальное и минимальное значение
[array[maxIndex], array[minIndex]] = [array[minIndex], array[maxIndex]];

console.log("Массив после замены максимального и минимального значения:", array);