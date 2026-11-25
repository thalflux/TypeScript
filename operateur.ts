const notes: [number, number, number] =[12, 15, 18];
const total: number = notes[0] + notes[1] + notes[2];
const moyenne: number = total / notes.length;
const reste: number = total % 4;
const carre: number = 3 ** 2;

const prenom: string = "Awa";
const message: string = prenom + " a une moyenne de " + moyenne;
console.log(total);
console.log(moyenne);
console.log(reste);
console.log(carre);
console.log(prenom);
console.log(message);