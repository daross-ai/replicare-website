Replicare AI — Static GitHub Pages site

This repository contains a clean static rebuild of the Replicare AI site using HTML, CSS, and vanilla JavaScript.

Files:
- index.html
- about.html
- blog.html
- contact.html
- styles.css
- script.js
- assets/ (placeholders for imagery)

Quick start (VS Code terminal):

1. Initialize git
```
git init
git branch -M main
```
2. Add files and commit
```
git add .
git commit -m "Initial commit — static site scaffold"
```
3. Create GitHub repo (on github.com) and add remote, then push
```
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

GitHub Pages: Enable Pages in repository settings and serve from `main` branch (root). Add a `CNAME` file at the repo root or configure DNS to point `replicareai.com` to GitHub Pages (see instructions in project README or below).

License: Replace with your preferred license.