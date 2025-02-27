// Массив с названиями стран
let countries = ["Россия", "США", "Индия", "Китай", "Бразилия"];

// Массив с населением стран
let population = [144500000, 331000000, 1393409038, 1444216107, 213993437];

// Функция для вывода названия страны и ее населения for
function displayCountryPopulation(countries, population) {
    for (let i = 0; i < countries.length; i++) {
        console.log(countries[i] + ": " + population[i] + " человек");
    }
}

displayCountryPopulation(countries, population);


// Функция для вывода названия страны и ее населения for...in
function displayCountryPopulationWithForIn(countries, population) {
    for (let i in countries) {
        console.log(countries[i] + ": " + population[i] + " человек");
    }
}

displayCountryPopulationWithForIn(countries, population);

// Создание массива с названиями месяцев
let arr = ["January", "February", "March", "April", "May", "June"];

// Присвоение значения метода pop() в переменную len
let len = arr.pop();

// Вывод результирующего массива
console.log(arr.join(" "));

console.log(len);


let a = [1, 2, 3, 4, 5, 6, 7];

// Присвоение переменной t результата метода slice(), который возвращает первые 3 значения из массива
let t = a.slice(0, 3);

console.log(t);