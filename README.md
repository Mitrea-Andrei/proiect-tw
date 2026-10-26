# GustoDelivery
O aplicație modernă pentru gestionarea comenzilor dintr-un restaurant online. Permite adăugarea preparatelor și urmărirea statusului de preparare.

## Data model
| Field | Type | Notes |
| --- | --- | --- |
| Nume preparat | text | required, max 100 chars |
| Finalizat | boolean | toggled from the list, default false |
| Categorie | fixed values | Fel principal, Desert, Băutură |
| Cumpărător | relation | the owner of the item (from week 11) |

Sample data used across all stages:
1. Pizza Quattro Formaggi, active, Fel principal
2. Limonadă cu mentă, done, Băutură
3. Lava Cake cu înghețată, active, Desert

## AI usage
| Tool | Used for |
| --- | --- |
| Gemini | Generare mock-up static complet (HTML sematic + CSS modern cu CSS Grid/Flexbox) adaptat temei proprii (restaurant online) conform PDF. |

Details per stage: see the `ai-log/` folder.

## How to run
Open `index.html` in a browser. No build step, no server.

## Status
- [x] Stage 1: static mockup
- [ ] Stage 2: data logic in JavaScript

## Verificare Etapa 1
| ID | Requirement | Where (permalink) | How to check |
|---|---|---|---|
| S1-R1 | README: description, fields, sample data, how to run | [README.md](https://github.com/Mitrea-Andrei/proiect-tw/blob/f06d3c6b1bf3a0eb86c0ed1dbef27125935b4034/README.md?plain=1#L1-L25) | read |
| S1-R2 | AI usage section | [README.md](https://github.com/Mitrea-Andrei/proiect-tw/blob/f06d3c6b1bf3a0eb86c0ed1dbef27125935b4034/README.md?plain=1#L17-L22) | read |
| S1-R3 | AI log for stage 1 | [ai-log/etapa-01.md](https://github.com/Mitrea-Andrei/proiect-tw/blob/f06d3c6b1bf3a0eb86c0ed1dbef27125935b4034/ai-log/etapa-01.md?plain=1#L1-L4) | read |
| S1-R4 | header, form (text + select), 3 cards | [index.html](https://github.com/Mitrea-Andrei/proiect-tw/blob/f06d3c6b1bf3a0eb86c0ed1dbef27125935b4034/index.html#L10-L60) | open the page |
| S1-R5 | finished card looks different | [style.css](https://github.com/Mitrea-Andrei/proiect-tw/blob/f06d3c6b1bf3a0eb86c0ed1dbef27125935b4034/style.css#L191-L202) | look at the card (.done) |
| S1-R6 | 2 columns on desktop, 1 under 700px | [style.css](https://github.com/Mitrea-Andrei/proiect-tw/blob/f06d3c6b1bf3a0eb86c0ed1dbef27125935b4034/style.css#L212-L216) | resize < 700px (@media) |
| S1-R7 | visible focus, readable dark theme | [style.css](https://github.com/Mitrea-Andrei/proiect-tw/blob/f06d3c6b1bf3a0eb86c0ed1dbef27125935b4034/style.css#L207-L210) | Tab; dark mode |
| S1-R8 | commit "Stage 1" pushed | [Commit history](https://github.com/Mitrea-Andrei/proiect-tw/commit/f06d3c6b1bf3a0eb86c0ed1dbef27125935b4034) | commit history |

## Stage 2: checklist

| ID | Requirement | Where (permalink) | How to check |
| --- | --- | --- | --- |
| S2-R1 | JS file linked, logs on page load | https://github.com/Mitrea-Andrei/proiect-tw/blob/main/mockup/index.html | open page, F12 |
| S2-R2 | 3+ items with id, name, state, tag | https://github.com/Mitrea-Andrei/proiect-tw/blob/main/mockup/taskuri.js | read |
| S2-R3 | list, count, search, add, toggle, delete | https://github.com/Mitrea-Andrei/proiect-tw/blob/main/mockup/taskuri.js | console output |
| S2-R4 | add rejects empty name and invalid tag | https://github.com/Mitrea-Andrei/proiect-tw/blob/main/mockup/taskuri.js | last 2 console lines |
| S2-R5 | original array unchanged after add | https://github.com/Mitrea-Andrei/proiect-tw/blob/main/mockup/taskuri.js | console line |
| S2-R6 | README Stage 2 section + AI log | https://github.com/Mitrea-Andrei/proiect-tw/blob/main/README.md, https://github.com/Mitrea-Andrei/proiect-tw/blob/main/ai-log/etapa-02.md | read |
| S2-R7 | commit "Stage 2" pushed | https://github.com/Mitrea-Andrei/proiect-tw/commits/main | commit history |

## Stage 3: checklist

| ID | Requirement | Where (permalink) | How to check |
| --- | --- | --- | --- |
| S3-R1 | npm run dev starts without errors | https://github.com/Mitrea-Andrei/proiect-tw/blob/main/frontend/package.json | npm install, npm run dev |
| S3-R2 | app name and counter computed from data | https://github.com/Mitrea-Andrei/proiect-tw/blob/main/frontend/src/App.jsx | edit data, save |
| S3-R3 | data from README, not from the example | https://github.com/Mitrea-Andrei/proiect-tw/blob/main/frontend/src/App.jsx | compare with README |
| S3-R4 | stage 1 styles reused | https://github.com/Mitrea-Andrei/proiect-tw/blob/main/frontend/src/App.css | look at the page |
| S3-R5 | node_modules ignored, build passes | https://github.com/Mitrea-Andrei/proiect-tw/blob/main/frontend/.gitignore | npm run build |
| S3-R6 | README Stage 3 section + AI log | https://github.com/Mitrea-Andrei/proiect-tw/blob/main/README.md, https://github.com/Mitrea-Andrei/proiect-tw/blob/main/ai-log/etapa-03.md | read |
| S3-R7 | commit "Stage 3" pushed | https://github.com/Mitrea-Andrei/proiect-tw/commits/main | commit history |

## Stage 4: checklist

| ID | Requirement | Where (permalink) | How to check |
| --- | --- | --- | --- |
| S4-R1 | 2+ components in src/components/ | https://github.com/Mitrea-Andrei/proiect-tw/tree/main/frontend/src/components | open folder |
| S4-R2 | card receives data through props | https://github.com/Mitrea-Andrei/proiect-tw/blob/main/frontend/src/components/TaskCard.jsx#L3 | read |
| S4-R3 | map + key={id}, no console warnings | https://github.com/Mitrea-Andrei/proiect-tw/blob/main/frontend/src/components/TaskList.jsx#L10 | F12, Console |
| S4-R4 | message for empty list | https://github.com/Mitrea-Andrei/proiect-tw/blob/main/frontend/src/components/TaskList.jsx#L4 | set array to [] |
| S4-R5 | state changes the card look | https://github.com/Mitrea-Andrei/proiect-tw/blob/main/frontend/src/components/TaskCard.jsx#L5 | toggle a done flag |
| S4-R6 | README Stage 4 section + AI log | https://github.com/Mitrea-Andrei/proiect-tw/blob/main/README.md, https://github.com/Mitrea-Andrei/proiect-tw/blob/main/ai-log/etapa-04.md | read |
| S4-R7 | commit "Stage 4" pushed | https://github.com/Mitrea-Andrei/proiect-tw/commits/main | commit history |

## Stage 5: checklist

| ID | Requirement | Where (permalink) | How to check |
| --- | --- | --- | --- |
| S5-R1 | list kept in useState, in App | https://github.com/Mitrea-Andrei/proiect-tw/blob/main/frontend/src/App.jsx#L16 | read |
| S5-R2 | toggling changes state and card look | https://github.com/Mitrea-Andrei/proiect-tw/blob/main/frontend/src/App.jsx#L19-L23, https://github.com/Mitrea-Andrei/proiect-tw/blob/main/frontend/src/components/TaskCard.jsx#L10 | click a checkbox |
| S5-R3 | delete removes the item | https://github.com/Mitrea-Andrei/proiect-tw/blob/main/frontend/src/App.jsx#L25-L27, https://github.com/Mitrea-Andrei/proiect-tw/blob/main/frontend/src/components/TaskCard.jsx#L21 | click Delete |
| S5-R4 | header counter derived, not in state | https://github.com/Mitrea-Andrei/proiect-tw/blob/main/frontend/src/App.jsx#L35 | toggle, watch header |
| S5-R5 | immutable updates (no push, splice, assignment) | https://github.com/Mitrea-Andrei/proiect-tw/blob/main/frontend/src/App.jsx#L20-L26 | read |
| S5-R6 | light / dark toggle: state + data-theme on html | https://github.com/Mitrea-Andrei/proiect-tw/blob/main/frontend/src/App.jsx#L29-L33, https://github.com/Mitrea-Andrei/proiect-tw/blob/main/frontend/src/App.css#L10-L24 | click the button, both system themes |
| S5-R7 | no console warnings; README + AI log | https://github.com/Mitrea-Andrei/proiect-tw/blob/main/README.md, https://github.com/Mitrea-Andrei/proiect-tw/blob/main/ai-log/etapa-05.md | F12, Console |
| S5-R8 | commit "Stage 5" pushed | https://github.com/Mitrea-Andrei/proiect-tw/commit/50e3d9d | commit history |