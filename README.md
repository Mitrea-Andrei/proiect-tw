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