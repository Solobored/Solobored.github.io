# Josué Neiculeo Baeriswyl — Portfolio

A one-page professional portfolio site, ready to deploy on GitHub Pages.

## What's inside
- `index.html` — the site content
- `css/style.css` — all styling
- `js/script.js` — small script for nav highlighting
- `assets/Josue_Neiculeo_Resume.pdf` — downloadable résumé

## How to publish this on GitHub Pages

1. **Create the repository.**
   - Go to https://github.com/new
   - Repository name: `Solobored.github.io` (must exactly match your username, with `.github.io` at the end)
   - Make it **Public**
   - Do not initialize with a README (you already have one)

2. **Upload these files.**
   - On the new repo's page, click "uploading an existing file"
   - Drag in `index.html`, the `css` folder, the `js` folder, and the `assets` folder (keep the folder structure — GitHub will preserve it)
   - Commit the files to the `main` branch

3. **Enable GitHub Pages.**
   - Go to the repo's **Settings** tab → **Pages** (left sidebar)
   - Under "Build and deployment," set **Source** to "Deploy from a branch"
   - Set **Branch** to `main` and folder to `/ (root)`
   - Click **Save**

4. **Wait a minute, then visit your site.**
   - GitHub will publish it at: `https://solobored.github.io/`
   - It can take 1–2 minutes the first time

5. **Update it later.**
   - Any time you want to change content, edit `index.html` (or the CSS) and re-upload/commit — the live site updates automatically within a minute or two.

## Editing tips
- All text content lives directly in `index.html` — search for the section you want to change (e.g., "Selected projects") and edit the text between the tags.
- Colors and fonts are all defined at the top of `css/style.css` under `:root` — change the hex values there to adjust the whole site's palette at once.
- To swap your résumé, replace `assets/Josue_Neiculeo_Resume.pdf` with a new PDF of the same file name (or update the link in `index.html` if you rename it).
