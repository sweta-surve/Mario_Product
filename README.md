# MARIO PRODUCTS — Project Structure

```
mario-project/
│
├── index.html              ← Main page (open this in browser)
│
├── css/
│   ├── variables.css       ← Colors, fonts, root variables, reset
│   ├── components.css      ← Navbar, buttons, cards, modal, footer
│   └── hero.css            ← Hero section & all animations
│
├── js/
│   ├── data.js             ← Product list (add/edit products here)
│   └── app.js              ← All logic: filter, modal, theme, scroll
│
└── images/
    └── products/
        ├── gl-001.jpg      ← Grey Jali Milky
        ├── gl-002.jpg      ← Grey Jali Clear
        ├── gl-003.jpg      ← Grey Lines Milky
        ├── gl-004.jpg      ← Grey Lines Clear
        ├── gl-005.jpg      ← Grey With Clear
        ├── gl-006.jpg      ← Grey With Milky
        ├── gl-007.jpg      ← Black Jali Milky
        ├── gl-008.jpg      ← Black Jali Clear
        ├── gl-009.jpg      ← Black Lines Milky
        ├── gl-010.jpg      ← Black Lines Clear
        ├── wl-001.jpg      ← White Jali Clear
        ├── wl-002.jpg      ← White Jali Milky
        ├── wl-003.jpg      ← White Lines Clear
        ├── wl-004.jpg      ← White Lines Milky
        ├── wl-005.jpg      ← White With Milky
        ├── wl-006.jpg      ← White With Clear
        ├── wl-007.jpg      ← Black Jali Clear (wall)
        └── wl-008.jpg      ← Black Jali Milky (wall)
```

---

## Want to edit something?

| What you want to change       | Open this file         |
|-------------------------------|------------------------|
| Add / edit a product          | `js/data.js`           |
| Change colors or fonts        | `css/variables.css`    |
| Change hero section style     | `css/hero.css`         |
| Change navbar / cards / modal | `css/components.css`   |
| Change page layout / sections | `index.html`           |
| Change button logic / filters | `js/app.js`            |

---

## How to add a product photo

1. Put your photo inside `images/products/` folder
2. Open `js/data.js`
3. Change the image path:
```js
image: "images/products/your-photo.jpg"
```

## How to deploy on Netlify

1. Upload all photos to [imgbb.com](https://imgbb.com) → copy direct links
2. Paste links into `js/data.js` image fields
3. Go to [netlify.com](https://netlify.com) → drag the entire `mario-project` folder
4. Done — your site is live!
