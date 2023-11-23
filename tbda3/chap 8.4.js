var n = parseInt(window.prompt("tapez un nombre"));
var x = parseInt(window.prompt("tapez un multiplicateur"));
var i = 0;
do {
    i++;
    var resultat = i * x;
    console.log(i + " * " + x + " = " + resultat);
    document.write(i + " * " + x + " = " + resultat + " / ");
} while (i < n);