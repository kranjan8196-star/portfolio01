# Ranjan Ai Digital Marketing

A responsive, English-language website built with React, Vite, JavaScript, and CSS.

## Run the website locally

1. Install [Node.js](https://nodejs.org/) if it is not already installed.
2. Open this project folder in VS Code.
3. Open **Terminal → New Terminal** and run:

   ```sh
   npm install
   npm run dev
   ```

4. Open the local address printed in the terminal (usually `http://localhost:5173`).

Stop the development server with **Ctrl+C**.

## Edit the content

- Website text, navigation, service cards, and contact form: `src/App.jsx`
- Colors, layout, and responsive styles: `src/index.css` and `src/App.css`
- Page title and search description: `index.html`
- Logo and portrait: replace `public/images/ranjan-logo.jpeg` and `public/images/ranjan-portrait.png` with files using the same names.

The contact form prepares an email draft addressed to the contact email in `src/App.jsx`. Visitors can review and send it using their own email app. The website does not store submissions.

## Check a production build

```sh
npm run build
```

Vite writes the production website to `dist/`. To preview that build locally, run `npm run preview`.

## Upload to GitHub

Create an empty repository on GitHub, then run these commands in the project terminal (replace the URL with your own repository URL):

```sh
git init
git add .
git commit -m "Build Ranjan Ai Digital Marketing website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

Do not add `.env` files or secret credentials to GitHub; they are excluded by `.gitignore`.

## Deploy with Vercel

Import the GitHub repository into Vercel. Vercel detects Vite automatically; use `npm run build` as the build command and `dist` as the output directory. The site does not need environment variables in its current form.

## Publish with GitHub Pages

The included GitHub Actions workflow builds and publishes the site whenever changes are pushed to `main`. After the first successful deployment, visit:

`https://kranjan8196-star.github.io/portfolio01/`
