function calculatePerimeter(...coordinates) {
    let n = coordinates.length / 2;  // Количество вершин (половина длины массива)
    let perimeter = 0;

    // Проходим по всем вершинам
    for (let i = 0; i < n; i++) {
        let x1 = coordinates[i * 2];
        let y1 = coordinates[i * 2 + 1];
        let x2 = coordinates[((i + 1) % n) * 2];  // Следующая вершина, с циклическим переходом
        let y2 = coordinates[((i + 1) % n) * 2 + 1];

        // Вычисляем расстояние между соседними вершинами
        let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        perimeter += distance;
    }

    return perimeter;
}

let perimeter = calculatePerimeter(0, 0, 4, 0, 4, 3, 0, 3);
console.log("Периметр многоугольника: " + perimeter);
