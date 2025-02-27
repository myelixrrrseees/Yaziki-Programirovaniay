function calculateU(x, y, z) {
    // Находим max(x, y), max(x + y, z) и max(0.5, x + z)
    let max1 = Math.max(x, y);
    let max2 = Math.max(x + y, z);
    let max3 = Math.max(0.5, x + z);

    // Вычисляем u по формуле
    let u = (max1 + max2) / max3;

    return u;
}

let x = 2.5;
let y = 3.1;
let z = 1.7;

let result = calculateU(x, y, z);
console.log("Значение u: " + result);
