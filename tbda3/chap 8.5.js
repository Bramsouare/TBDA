var mot = window.prompt("tapez un mot");
var longueur = mot.length;
var i;
var voyelle = 0;
for (var i = 0; i < longueur; i++) {
    if (i == "a" || i == "e" || i == "i" || i == "o" || i == "u" || i == "y")
        voyelle++;

};
console.log("le nombre de voyelles est " + voyelle);
