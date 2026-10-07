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