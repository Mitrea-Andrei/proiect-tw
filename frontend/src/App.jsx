import { useState } from "react";
import TaskList from "./components/TaskList.jsx";
import "./App.css";

const PREPARATE_INITIALE = [
  { id: 1, titlu: "Pizza Margherita", prioritate: "mare", gata: false },
  { id: 2, titlu: "Paste Carbonara", prioritate: "medie", gata: true },
  { id: 3, titlu: "Tiramisu", prioritate: "mica", gata: false }
];

function temaInitiala() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function App() {
  const [taskuri, setTaskuri] = useState(PREPARATE_INITIALE);
  const [tema, setTema] = useState(temaInitiala);

  function handleToggle(id) {
    setTaskuri((prev) =>
      prev.map((t) => (t.id === id ? { ...t, gata: !t.gata } : t))
    );
  }

  function handleDelete(id) {
    setTaskuri((prev) => prev.filter((t) => t.id !== id));
  }

  function handleTema() {
    const noua = tema === "dark" ? "light" : "dark";
    setTema(noua);
    document.documentElement.dataset.theme = noua;
  }

  const active = taskuri.filter((t) => !t.gata).length;

  return (
    <div className="app">
      <header className="header">
        <button
          className="theme-toggle"
          onClick={handleTema}
          aria-pressed={tema === "dark"}
        >
          {tema === "dark" ? "Mod luminos" : "Mod întunecat"}
        </button>
        <h1>Restaurant App</h1>
        <p>Meniul zilei și preparatele noastre.</p>
        <p className="app-count">
          {taskuri.length} preparate, dintre care {active} active
        </p>
      </header>

      <main className="main">
        <section className="panel">
          <h2>Preparatele mele</h2>
          <TaskList
            taskuri={taskuri}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />
        </section>
      </main>
    </div>
  );
}