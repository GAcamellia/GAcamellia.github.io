# GitHub Pages Portfolio Site

This folder is a free, static portfolio site intended for GitHub Pages.

## What it is for

- One public portfolio link for resumes
- A clean hub for multiple projects
- Easy future updates by editing `projects.js`

## Files

- `index.html`: page structure
- `styles.css`: visual design
- `projects.js`: project data and filtering

## How to publish for free with GitHub Pages

1. Create a GitHub repository.
2. Upload the contents of this folder to the repository root.
3. If you want the cleanest URL, name the repository:
   - `<your-github-name>.github.io`
4. In GitHub:
   - `Settings`
   - `Pages`
   - `Build and deployment`
   - Choose `Deploy from a branch`
   - Select `main` and `/root`
5. Wait for GitHub to publish the site.

## Default URL style

- If the repository is `yourname.github.io`:
  - `https://yourname.github.io`
- If the repository is a normal project repo:
  - `https://yourname.github.io/repository-name`

## How to add more projects

Edit `projects.js` and add another object to the `projects` array.

Update:

- `title`
- `status`
- `category`
- `summary`
- `tags`
- `links`
- `notes`

## Recommended next step

After this portfolio page is published, we can:

1. Add your real GitHub repository links
2. Add public demo links for each project
3. Replace placeholder cards with your real projects
