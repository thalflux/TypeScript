function verifie(valeur: unknown): void{
    if(typeof valeur === "string"){
        console.log(valeur.toUpperCase());
    }else{
        console.log("Ceci n est pas une chaine de caractere!");
    }
}
verifie("Komla");
verifie(34);