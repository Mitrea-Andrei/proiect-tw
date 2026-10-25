// 1. Datele de test și categoriile permise
const comenzi = [
  { id: 1, titlu: "Pizza Quattro Formaggi", gata: false, categorie: "principal" },
  { id: 2, titlu: "Limonadă cu mentă", gata: true, categorie: "bautura" },
  { id: 3, titlu: "Lava Cake cu înghețată", gata: false, categorie: "desert" }
];

const CATEGORII = ["principal", "desert", "bautura"];

// 2. Funcțiile cerute (imutabile)
function listeazaTitluri(lista) {
  return lista.map((c) => c.titlu);
}

function numaraInPreparare(lista) {
  return lista.filter((c) => !c.gata).length;
}

function cautaDupaTitlu(lista, text) {
  const textCautat = text.toLowerCase();
  return lista.filter((c) => c.titlu.toLowerCase().includes(textCautat));
}

function nextId(lista) {
  return lista.reduce((max, c) => Math.max(max, c.id), 0) + 1;
}

function adaugaComanda(lista, titlu, categorie = "principal") {
  const titluCurat = titlu.trim();
  
  if (titluCurat === "") {
    console.log("Eroare: Titlul nu poate fi gol.");
    return lista;
  }
  
  if (!CATEGORII.includes(categorie)) {
    console.log(`Eroare: Categoria '${categorie}' este invalidă.`);
    return lista;
  }
  
  const comandaNoua = {
    id: nextId(lista),
    titlu: titluCurat,
    gata: false,
    categorie: categorie
  };
  
  return [...lista, comandaNoua];
}

function comutaGata(lista, id) {
  return lista.map((c) => (c.id === id ? { ...c, gata: !c.gata } : c));
}

function stergeComanda(lista, id) {
  return lista.filter((c) => c.id !== id);
}

// 3. Testele afișate în consolă
console.log("--- Citire ---");
console.log("Titluri:", listeazaTitluri(comenzi).join(", "));
console.log("În preparare:", numaraInPreparare(comenzi));
console.log("Căutare 'pizza':", listeazaTitluri(cautaDupaTitlu(comenzi, "pizza")).join(", "));

console.log("\n--- Adăugare ---");
let listaNoua = adaugaComanda(comenzi, "Paste Carbonara", "principal");
console.log("Lista nouă are:", listaNoua.length, "comenzi");
console.log("Originalul a rămas cu:", comenzi.length, "comenzi");

console.log("\n--- Modificare și ștergere ---");
listaNoua = comutaGata(listaNoua, 1);
console.log("După finalizarea id 1, în preparare au rămas:", numaraInPreparare(listaNoua));

listaNoua = stergeComanda(listaNoua, 3);
console.log("După ștergerea id 3, titlurile rămase:", listeazaTitluri(listaNoua).join(", "));

console.log("\n--- Validare ---");
adaugaComanda(listaNoua, "   ", "principal");
adaugaComanda(listaNoua, "Supă cremă", "ciorbe");