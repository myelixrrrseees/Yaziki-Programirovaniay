// Создание матрицы 5x5 с случайными значениями в диапазоне [-10, 10]
let matrix = Array.from({ length: 5 }, () => Array.from({ length: 5 }, () => Math.floor(Math.random() * 21) - 10));

// Функция для вывода элементов матрицы, принадлежащих интервалу [-5, 7]
function printElementsInRange(matrix, min, max) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] >= min && matrix[i][j] <= max) {
                console.log(matrix[i][j]);
            }
        }
    }
}

// Вывод матрицы
console.log("Матрица:");
for (let row of matrix) {
    console.log(row);
}

// Вывод элементов матрицы, принадлежащих интервалу [-5, 7]
console.log("Элементы матрицы, принадлежащие интервалу [-5, 7]:");
printElementsInRange(matrix, -5, 7);