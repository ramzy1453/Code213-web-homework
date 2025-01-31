// Compter de 1 à 10

// let compteur = 1;
// while (compteur <= 10) {
//     console.log(compteur);
//   compteur++;
// }

// Afficher les nombres pairs entre 1 et 20

// let compteur = 1;
// while (compteur <= 20) {
//   if (compteur % 2 === 0) {
//     console.log(compteur);
//   }
//   compteur++;
// }

// Additionner les nombres de 1 à 5

// let cpt = 1;
// let sum = 0;
// while (cpt <= 5) {
//   sum = sum + cpt;
//   cpt++;
//   console.log(sum);
// }

// Afficher une table de multiplication
// let cpt = 1;
// while (cpt <= 10) {
//   console.log(`6 x ${cpt} = ${cpt * 6}`);
//   cpt++;
// }
// Calculer la somme des nombres impairs de 1 à 20

// Boucle imbriquee table de multiplication

// let i = 1;
// while (i <= 10) {
//   console.log(`Table de multiplication de ${i}`);
//   let j = 1;
//   while (j <= 10) {
//     console.log(`${i} x ${j} = ${i * j}`);
//     j++;
//   }
//   i++;
// }

// second to heur:minute:second

// let input = 3700;
// let heur = Math.trunc(input / 3600);

// input = input - 3600 * heur;

// console.log(heur, input);

// // Calcul de factorielle
// let n = 5;
// let factorielle = 1;
// while (n > 0) {
//   factorielle = factorielle * n;
//   n--;
// }

// console.log(factorielle);

// Compter les caractères d'une chaîne
let mot = "salam";
console.log(mot.length);

// Compter les voyelles dans une chaîne
let numberVowels = 0;
for (let i = 0; i < mot.length; i++) {
  if (
    mot[i] === "a" ||
    mot[i] === "e" ||
    mot[i] === "u" ||
    mot[i] === "i" ||
    mot[i] === "o" ||
    mot[i] === "y"
  ) {
    numberVowels++;
  }
}

console.log(mot, numberVowels);

// Trouver le plus grand nombre dans un tableau
let notes = [12, 14, 8, 18, 17, 7];
let max = notes[0];
for (let i = 1; i < notes.length; i++) {
  if (notes[i] > max) {
    max = notes[i];
  }
}
