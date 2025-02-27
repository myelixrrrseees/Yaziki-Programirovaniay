// Создание матрицы MxN с случайными значениями в диапазоне [1, 100]
let M = 5; // количество строк
let N = 4; // количество столбцов
let matrix = Array.from({ length: M }, () => Array.from({ length: N }, () => Math.floor(Math.random() * 100) + 1));

// Функция для нахождения суммы наибольших значений элементов строк
function sumOfMaxInRows(matrix) {
    let sum = 0;
    for (let i = 0; i < matrix.length; i++) {
        let maxInRow = Math.max(...matrix[i]);
        sum += maxInRow;
    }
    return sum;
}

// Функция для нахождения произведения наименьших значений элементов столбцов
function productOfMinInColumns(matrix) {
    let product = 1;
    for (let j = 0; j < matrix[0].length; j++) {
        let minInColumn = matrix[0][j];
        for (let i = 1; i < matrix.length; i++) {
            if (matrix[i][j] < minInColumn) {
                minInColumn = matrix[i][j];
            }
        }
        product *= minInColumn;
    }
    return product;
}

// Вывод матрицы
console.log("Матрица:");
for (let row of matrix) {
    console.log(row);
}

// Нахождение суммы наибольших значений элементов строк
let sumMaxRows = sumOfMaxInRows(matrix);
console.log("Сумма наибольших значений элементов строк:", sumMaxRows);

// Нахождение произведения наименьших значений элементов столбцов
let productMinColumns = productOfMinInColumns(matrix);
console.log("Произведение наименьших значений элементов столбцов:", productMinColumns);