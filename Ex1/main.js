// Funkcja prezentująca działanie pętli for
function demonstrateForLoop() {
    for (let i = 1; i <= 5; i++) {
        console.log(`Liczba: ${i}`);
    }
}

// Funkcja prezentująca działanie pętli while 

function demonstrateWhileLoop() {
    let i = 1;
    while (i <= 5) {
        console.log(`Liczba: ${i}`);
        i++;
    }
}

// Funkcja prezentująca działanie pętli for ... in
function demonstrateForInLoop() {
    const person = { name: "Adam", age: 25, city: "Warsaw" };
    for (let key in person) {
        console.log(`${key}: ${person[key]}`);
    }
}

// Funkcja prezentująca działanie pętli for ... of
function demonstrateForOfLoop() {
    const fruits = ["Apple", "Banana", "Cherry"];
    for (let fruit of fruits) {
        console.log(fruit);
    }
}

// Funkcja prezentująca działanie instrukcji if
function demonstrateIfStatement(number) {
    if (number % 2 === 0) {
        console.log(`${number} jest liczbą parzystą`);
    } else {
        console.log(`${number} jest liczbą nieparzystą`);
    }
}

// Funkcja sprawdzająca, czy parametry są liczbami
function checkAndCalculate(a, b) {
    if (!isNaN(a) && !isNaN(b)) {
        return Number(a) + Number(b);
    } else {
        throw new Error("Jeden z parametrów nie jest liczbą!");
    }
}

// Funkcja przyjmująca zmienną liczbę parametrów
function demonstrateRestParameters(...numbers) {
    console.log("Otrzymane liczby:", numbers);
    return numbers.reduce((sum, num) => sum + num, 0);
}

// Funkcja przyjmująca jako parametr funkcję
function executeFunction(fn, value) {
    console.log("Wynik działania funkcji:", fn(value));
}

function square(x) {
    return x * x;
}

function double(x) {
    return x * 2;
}

// Konstruktor do tworzenia obiektów
function Person(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
    this.greet = function () {
        console.log(`Cześć, jestem ${this.name} z ${this.city}.`);
    };
}

// Klasa do tworzenia obiektów
class Animal {
    constructor(name, species, age) {
        this.name = name;
        this.species = species;
        this.age = age;
    }

    describe() {
        console.log(`${this.name} to ${this.species}, ma ${this.age} lat.`);
    }
}

// Przykłady wywołań
demonstrateForLoop();
demonstrateWhileLoop();
demonstrateForInLoop();
demonstrateForOfLoop();
demonstrateIfStatement(4);
demonstrateIfStatement(7);
console.log(checkAndCalculate(4, "6"));
console.log(demonstrateRestParameters(1, 2, 3, 4, 5));
executeFunction(square, 5);
executeFunction(double, 5);

const person1 = new Person("Kamil", 27, "Warszawa");
person1.greet();

const animal1 = new Animal("Ares", "pies", 5);
animal1.describe();
