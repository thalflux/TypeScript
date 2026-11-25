function afficherNom(valeur: unknown): void{
    if(typeof valeur === "string"){
        console.log(valeur.toUpperCase());
    }else{
        console.log("La valeur n' est pas une chaine.");
    }
}

afficherNom("Mariam");
afficherNom(42);