// 1 - Affichage d'un text
console.log("Hello Ramzy !");

// 2 - Déclaration de variables
let username = "Ramzy";
let myAge = 25;
let note = 19;

// 3 - Affichage des variables
console.log("Hello my name is ", username);
console.log("My age is", myAge);

// 4 - Lire des données depuis l'utilisateur
let username2 = prompt("Enter your name");
console.log("Hello", username2);

// 5 - Type de données (variables)
let x = 5; // Number
let familyName = "Kemmoun"; // String
let isStudent = true; // Boolean

// 6 - Opérations mathématiques
let a = 5;
let b = 7;
let sum = a + b;
let soustraction = a - b;
let multiplication = a * b;
let division = a / b;
let modulo = a % b;

console.log(`la somme de ${a} et ${b} est ${sum}`);

// Mini exercice : Demander à l'utilisateur de saisir son prénom et son nom, puis afficher un message de bienvenue

let firstName = prompt("Enter your first name");
let lastName = prompt("Enter your last name");

let fullName = firstName + " " + lastName;

console.log(`Hello and welcome, ${fullName}`);

// 7 - Les conditions
let age = 11;

if (age > 0 && age < 10) {
  console.log("You are a child");
} else if (age >= 10 && age < 18) {
  console.log("You are a teenager");
} else if (age >= 18 && age < 30) {
  console.log("You are a young adult");
} else {
  console.log("You are an adult");
}

if (age === 26) {
  console.log("You are 26 years old");
}

// 8 - Opérateurs logiques : (>), (<), (>=), (<=), (===), (!=), (&&), (||)
