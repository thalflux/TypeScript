function afficherEtudiant(nom: string): void{

    const message: string = `Etudiant ${nom}`;
    
    if(nom.length > 0){
        const detail: string = "Filiere : Genie Logiciel";
        console.log(message);
        console.log(detail);
    }

}

afficherEtudiant("Koffi");