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
