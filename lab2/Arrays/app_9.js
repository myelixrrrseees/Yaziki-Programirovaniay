let array1 = [1, 2, 5, 4, 6];
let array2 = [8, 2, 5, 9, 5];

// Объединение двух массивов
let combinedArray = array1.concat(array2);

// Сортировка объединенного массива
combinedArray.sort((a, b) => a - b);

// Функция для нахождения медианы
function findMedian(arr) {
    let len = arr.length;
    let mid = Math.floor(len / 2);

    if (len % 2 === 0) {
        // Если количество элементов четное, медиана - это среднее арифметическое двух средних элементов
        return (arr[mid - 1] + arr[mid]) / 2;
    } else {
        // Если количество элементов нечетное, медиана - это средний элемент
        return arr[mid];
    }
}

// Нахождение медианы объединенного массива
let median = findMedian(combinedArray);

console.log("Медиана:", median);