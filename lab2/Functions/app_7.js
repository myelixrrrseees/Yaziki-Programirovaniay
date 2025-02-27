function calculateSequence(N, previousSum = 1, currentTerm = 1, count = 1) {
    // Если дошли до N-го члена
    if (count === N) {
        return currentTerm;
    }

    // Рекурсивный случай
    const nextTerm = Math.sin(previousSum);
    return calculateSequence(N, previousSum + nextTerm, nextTerm, count + 1);
}

let N = 5; // 5-й член последовательности
let result = calculateSequence(N);
console.log("5-й член последовательности: " + result);
