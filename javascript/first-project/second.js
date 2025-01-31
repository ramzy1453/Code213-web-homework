// 10 - Arrays (Listes)
let notes = [20, 15, 14, 10];

// Taille de la listes
console.log("length", notes.length);

// Access aux elements un par un
console.log(notes[0]);
console.log(notes[1]);
console.log(notes[2]);
console.log(notes[3]);

// Modifier un element
notes[0] = 17;

console.log(notes);

// Ajouter un nouvel element
notes.push(18);

console.log(notes);

// Suprimer le dernier element
notes.pop();

console.log(notes);

// Calculer la somme de une listes
let etudiants = [12, 13, 15, 17, 18, 19, 21];
let sum = 0;

let i = 0;
while (i < etudiants.length) {
  console.log("notes = ", etudiants[i]);

  i++;
}

for (let i = 0; i < etudiants.length; i++) {
  sum += etudiants[i];
}

let moyenne = sum / etudiants.length;

// Creer liste dont le contenu est etudiants x 2
let etd2 = [];
for (let i = 0; i < etudiants.length; i++) {
  etd2.push(2 * etudiants[i]);
}

// Objects
let user = {
  username: "ramzy",
  age: 22,
  country: "algeria",
  university: "USTHB",
  field: "Computer Science",
};

// Access au infos
console.log(user.username);

// Modifier info
user.field = "Design";

console.log(user);

// Combiner Array et Object
let users = [
  {
    fullName: {
      firstName: "Ramzy",
      lastName: "Kemmoun",
    },
    field: "informatique",
    hobbies: ["cs", "games"],
  },
  {
    username: "wassim",
    field: "medcine",
    hobbies: ["cs", "medcine"],
  },
  {
    username: "massi",
    field: "tourisme",
    hobbies: ["cs", "tourisme"],
  },
];
console.log(users[2].hobbies[0]);

// Calcul de factorielle

function calculFactorielle(n) {
  let factorielle = 1;
  while (n > 0) {
    factorielle = factorielle * n;
    n--;
  }

  return factorielle;
}

let fa = calculFactorielle(2);
let f2 = calculFactorielle(5);
let f3 = calculFactorielle(9);
let f4 = calculFactorielle(12);

console.log(fa, f2, f3, f4);

function surface(tol, ard) {
  return tol * ard;
}

let s = surface(5, 8);
let s1 = surface(9, 9);
console.log(s, s1);

function jadwalDarb(ra9am) {
  // Afficher une table de multiplication
  console.log(`Multiplication table of ${ra9am}`);
  let cpt = 1;
  while (cpt <= 10) {
    console.log(`${ra9am} x ${cpt} = ${cpt * ra9am}`);
    cpt++;
  }
}

jadwalDarb(4);
jadwalDarb(6);
jadwalDarb(34);

function f(array) {
  let somme = 0;
  for (let i = 0; i < array.length; i++) {
    somme = somme + array[i];
  }

  return somme;
}

let A = [2, 3, 55];

let sA = f(A);

console.log(sA);
