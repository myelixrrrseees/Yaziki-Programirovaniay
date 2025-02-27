let array = [-1, 2, -3, 4, -5, 6, -7, 8, -9, 10];

for (let i = 0; i < array.length; i++) {
    if (i % 2 !== 0 && array[i] > 0) {
        array[i] *= 3;

    } else if (i % 2 === 0 && array[i] < 0) {
        array[i] /= 5;
    }
}

console.log(array);