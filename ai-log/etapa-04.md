# AI Log - Etapa 4

**Context:** Spargerea aplicației în componente React (`TaskList`, `TaskCard`) și transmiterea datelor prin props.

**Prompturi principale și ajutor primit:**
- Am întrebat cum să împart codul în componente separate. AI-ul a generat codul pentru `TaskCard.jsx` și `TaskList.jsx` și a explicat cum circulă props-urile.
- Am întâmpinat probleme cu vizibilitatea textului și erori de parsare în fișiere. AI-ul a curățat fișierul `App.css`, restabilind culorile originale (inclusiv portocaliul dorit).
- Am întrebat cum tratez cazul când lista este goală. AI-ul m-a ghidat să testez condiția `taskuri.length === 0` și mesajul "Nu există niciun preparat."

**Rezultat:** Aplicația randează dinamic preparatele dintr-un array definit constant, folosind metoda `.map()`.