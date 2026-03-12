# CAD 42 — Design System (Novalt Style)

Generated: 2026-03-12

---

## Color Palette

| Token | Value | Usage |
|---|---|---|
| `--bg-main` | `#fff9fb` | Fond principal (sections claires) |
| `--bg-alt` | `#f7f4f3` | Fond crème (sections alternées) |
| `--dark-green` | `#164f3b` | Sections sombres, boutons primaires, accents |
| `--dark-charcoal` | `#253237` | Sections sombres alternatives, footer |
| `--text-primary` | `#242526` | Texte principal sur fond clair |
| `--text-white` | `#ffffff` | Texte sur fonds sombres |
| `--accent-purple` | `#673ae4` | CTA secondaires, highlights, section-labels |
| `--border-color` | `rgba(36,37,38,0.19)` | Bordures de cartes, tableaux, séparateurs |

### Couleurs fonctionnelles (non-design-system)
- Success / positif : `#4ade80` (sur fonds verts sombres)
- Warning / modéré : `#fbbf24` (sur fonds sombres)
- Accent alternatif : `#a78bfa` (variante violet sur fonds sombres)
- Danger/rouge : `#c0392b`
- Orange : `#d35400`
- Bleu : `#2980b9`

---

## Typographie

### Polices
- **Inter** (Google Fonts) — `var(--font-sans)` — Toutes graisses 400 à 800
- **Libre Baskerville** (Google Fonts) — `var(--font-serif)` — Accents italiques élégants

### Hiérarchie typographique

| Élément | Taille | Poids | Notes |
|---|---|---|---|
| H1 Hero | `clamp(3rem, 6vw, 5rem)` | 800 | `letter-spacing: -0.04em` |
| H2 Section | `clamp(2rem, 4vw, 3rem)` | 800 | `letter-spacing: -0.03em` |
| H3 | `1.2rem` | 700 | `letter-spacing: -0.02em` |
| Section Label | `0.72rem` | 700 | `letter-spacing: 0.15em`, UPPERCASE, couleur `#673ae4` |
| Body | `1rem` / `0.9rem` | 400–500 | `line-height: 1.6` |
| Caption / meta | `0.78rem–0.82rem` | 500–600 | — |
| Table headers | `0.78rem` | 600 | `letter-spacing: 0.05em`, UPPERCASE |

---

## Spacing

| Token | Valeur |
|---|---|
| Section padding | `80px 40px` |
| Card padding | `32px` |
| Card-alt padding | `32px` |
| Gap grid | `24px` (standard), `20px` (dense) |
| Margin section-header bottom | `56px` |
| Divider margin | `40px 0` |

---

## Composants

### Boutons

```css
.btn {
  padding: 14px 32px;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 600;
}

/* Primaire — vert forêt */
.btn-green { background: #164f3b; color: #fff; }

/* CTA — violet */
.btn-purple { background: #673ae4; color: #fff; }

/* Sur fond sombre */
.btn-outline-white {
  background: transparent;
  color: #fff;
  border: 1.5px solid rgba(255,255,255,0.5);
}
```

### Cartes

```css
/* Fond blanc */
.card {
  background: #fff;
  border: 1px solid rgba(36,37,38,0.19);
  border-radius: 8px;
  padding: 32px;
}

/* Fond crème */
.card-alt {
  background: #f7f4f3;
  border: 1px solid rgba(36,37,38,0.19);
  border-radius: 8px;
  padding: 32px;
}
```

### Badges / Tags

```css
.tag { padding: 4px 12px; border-radius: 100px; font-size: 0.75rem; font-weight: 600; }
.tag-green { background: rgba(22,79,59,0.1); color: #164f3b; }
.tag-purple { background: rgba(103,58,228,0.1); color: #673ae4; }
.tag-red { background: rgba(192,57,43,0.12); color: #c0392b; }
.tag-orange { background: rgba(230,126,34,0.12); color: #d35400; }
.tag-blue { background: rgba(41,128,185,0.12); color: #2980b9; }
```

### KPI Cards

```css
.kpi-card {
  background: #fff;
  border: 1px solid rgba(36,37,38,0.19);
  border-radius: 8px;
  padding: 28px 24px;
  text-align: center;
}
.kpi-value { font-size: 2rem; font-weight: 800; letter-spacing: -0.03em; color: #164f3b; }
.kpi-label { font-size: 0.82rem; color: #6b7280; font-weight: 500; }
```

### Tableaux

```css
table { width: 100%; border-collapse: collapse; font-size: 0.9rem; }
th { padding: 12px 16px; font-weight: 600; font-size: 0.78rem; letter-spacing: 0.05em; text-transform: uppercase; }
td { padding: 14px 16px; border-bottom: 1px solid rgba(36,37,38,0.19); }
/* Wrapper */
.table-wrap { border: 1px solid rgba(36,37,38,0.19); border-radius: 8px; overflow: hidden; }
.table-wrap-dark { border: 1px solid rgba(255,255,255,0.15); border-radius: 8px; overflow: hidden; }
```

---

## Layout

### Container
```css
.container { max-width: 1200px; margin: 0 auto; padding: 0 40px; }
```

### Grilles
```css
.grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
.grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
.grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
```

---

## Structure des sections alternées

| Ordre | Classe CSS | Fond | Texte |
|---|---|---|---|
| Section paire | `.section-light` | `#fff9fb` | `#242526` |
| Section impaire | `.section-alt` | `#f7f4f3` | `#242526` |
| Section accent 1 | `.section-dark-green` | `#164f3b` | `#ffffff` |
| Section accent 2 | `.section-dark-charcoal` | `#253237` | `#ffffff` |

---

## Règles de design

1. **Aucun glassmorphism** — fond flou / backdrop-filter interdit
2. **Pas d'ombres marquées** — uniquement `box-shadow` léger si nécessaire
3. **Design flat et propre** — borders légères `rgba(36,37,38,0.19)` uniquement
4. **Border-radius uniformes** — `8px` pour cards/containers, `6px` boutons, `100px` tags/badges
5. **Max-width 1200px** — toujours centré
6. **Espacement généreux** — 80px entre sections, ne pas comprimer
7. **Typographie alignée** — toujours Inter, accents serif Libre Baskerville en italique uniquement
