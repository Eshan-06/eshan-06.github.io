# Eshan Sharma — Portfolio Website

Personal portfolio site — pure HTML/CSS/JS, no build step. Sections: hero w/ terminal card, about, tech stack, experience timeline, live GitHub repos (fetched via GitHub API), contact.

## Run locally

```bash
python -m http.server 8000
# open http://localhost:8000
```

## Edit content

- Text/links: `index.html`
- Skills, experience, typed hero words, GitHub username: `js/main.js` (top of file — `SKILLS`, `EXPERIENCE`, `TYPED_WORDS`, `GITHUB_USER`)
- Resume PDF: replace `assets/Eshan_Sharma_Resume.pdf` (keep the same filename)

## Deploy to GitHub Pages (→ https://eshan-06.github.io)

```bash
git init
git add .
git commit -m "Portfolio site"
git branch -M main
git remote add origin https://github.com/Eshan-06/eshan-06.github.io.git
git push -u origin main
```

1. On github.com, create a new **public** repo named exactly `eshan-06.github.io`
2. Push the code (commands above)
3. Repo → **Settings → Pages** → Source: `main` branch, `/ (root)` → Save
4. Site goes live at **https://eshan-06.github.io** in ~1 minute

## GitHub profile README

`github-profile/README.md` renders on your GitHub profile page. To activate:
create a **public** repo named `Eshan-06` (same as your username), add this README.md, push. GitHub shows a hint when you create a repo matching your username.
