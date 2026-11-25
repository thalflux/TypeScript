type Etudiant = { nom: string; note?: number };

function trouverEtudiant(): Etudiant | undefined {
  return undefined;
}

const etudiant = trouverEtudiant();
const nom: string = etudiant?.nom ?? "Inconnu";
console.log(nom); // "Inconnu"