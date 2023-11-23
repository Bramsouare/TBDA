var numero = 1;
// (DO) ce qu'on demmande de faire
 do {
// incrémenter la variable dans le champ de txt sans oublier les espaces dans la chaîne de raca pour la bonne cohésion du txt et variable
    var prenom = window.prompt("tapez le prénom n°"+numero+", si vous avez fini tapez entrée sur champ vide:");
    console.log("le n° "+numero+" est "+prenom);
    numero++;
} while (prenom !="");
