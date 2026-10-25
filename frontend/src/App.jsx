const comenzi = [
  { id: 1, titlu: "Pizza Quattro Formaggi", gata: false, categorie: "principal" },
  { id: 2, titlu: "Limonadă cu mentă", gata: true, categorie: "bautura" },
  { id: 3, titlu: "Lava Cake cu înghețată", gata: false, categorie: "desert" }
];

export default function App() {
  // Calculăm automat câte comenzi mai sunt în preparare
  const active = comenzi.filter((c) => !c.gata).length;

  return (
    <>
      <header className="app-header">
        <h1>GustoDelivery</h1>
        <p>Gestionează comanda curentă și urmărește statusul preparatelor.</p>
        <p className="app-count">{comenzi.length} preparate în comandă, {active} în preparare</p>
      </header>

      <main className="container">
        {/* Panoul 1: Formularul de adăugare */}
        <section className="panel">
          <h2>Adaugă preparat</h2>
          <form className="item-form">
            <label>
              Nume preparat
              <input type="text" name="titlu" placeholder="Ex: Pizza Diavola" />
            </label>
            <label>
              Categorie
              <select name="eticheta">
                <option value="principal">Fel principal</option>
                <option value="desert">Desert</option>
                <option value="bautura">Băutură</option>
              </select>
            </label>
            <button type="submit">Adaugă în comandă</button>
          </form>
        </section>

        {/* Panoul 2: Lista comenzilor (exact cum ai făcut-o tu în HTML) */}
        <section className="panel">
          <h2>Comanda mea</h2>
          <ul className="item-list">
            <li className="item-card">
              <div>
                <h3>Pizza Quattro Formaggi</h3>
                <span className="badge badge-principal">Fel principal</span>
              </div>
              <span className="status">În preparare</span>
            </li>
            <li className="item-card done">
              <div>
                <h3>Limonadă cu mentă</h3>
                <span className="badge badge-bautura">Băutură</span>
              </div>
              <span className="status">Gata de servire</span>
            </li>
            <li className="item-card">
              <div>
                <h3>Lava Cake cu înghețată</h3>
                <span className="badge badge-desert">Desert</span>
              </div>
              <span className="status">În preparare</span>
            </li>
          </ul>
        </section>
      </main>

      <footer className="app-footer">Proiect Tehnologii Web - Etapa 3 | Restaurant Online</footer>
    </>
  );
}