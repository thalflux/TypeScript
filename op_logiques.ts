const moyenne: number = 14.5;
const present: boolean = true;
const dossierComplet: boolean = true;

const admis: boolean = moyenne >= 10 && present && dossierComplet;
console.log(admis);

const rattrapage: boolean = moyenne >= 8 || dossierComplet;
console.log(rattrapage);