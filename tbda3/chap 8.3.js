var moyenne = 0;
var somme = 0;
var tour = 0;
do {
    var nbr = parseInt(window.prompt("tapez des nombres, arrête la saisie avec la valeur 0"));
    somme = somme + nbr;
    tour = tour + 1;
} while (nbr != 0);
moyenne = somme / (tour-1);
window.alert("la somme est " + somme + " la moyenne est " + moyenne);