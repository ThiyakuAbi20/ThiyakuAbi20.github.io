# Abiramy Thiyakesan — Freelance Portfolio

A responsive portfolio website built with **HTML, CSS and TypeScript**. It is designed to help present your freelance services and selected software projects to potential clients.

## Features

- Responsive desktop, tablet and mobile layout
- Project cards for Queue Management, URL Shortener, ReachTag and Legal Judgment Prediction
- Service descriptions focused on freelance client needs
- Skills, experience and education sections based on your CV
- Mobile navigation menu
- Contact form that prepares an email in the visitor's default email app (it does not send anything automatically)
- Accessible labels, keyboard focus styles and reduced-motion support

## Requirements

- Node.js and npm
- A code editor such as Visual Studio Code

## Run locally

1. Extract the ZIP and open the folder in VS Code.
2. Open a terminal in the project folder.
3. Install TypeScript:

   ```bash
   npm install
   ```

4. Compile TypeScript:

   ```bash
   npm run build
   ```

5. Open `index.html` using the VS Code Live Server extension, or another local static server.

The TypeScript source is `main.ts`; the compiled JavaScript is generated at `dist/main.js`. The `dist/` folder is included in the ZIP so the page can run after extraction, but rebuild it after changing `main.ts`.

## Before publishing

- Check that your GitHub and LinkedIn links are correct.
- Add real project repository/demo links only for projects you are allowed to share. Project cards currently lead to the contact section rather than pretending that every project has a public demo.
- The project illustrations are CSS mockups, not screenshots of live products.
- Consider adding a PDF CV download after confirming which version of your CV you want to publish.
- Test the contact form on a device with an email app configured.
- Google Fonts and Lucide icons load from external CDNs. For a fully offline site, download and self-host those assets.

## Deploy

This is a static website and can be deployed to GitHub Pages, Netlify, Vercel, or any static web host. Compile TypeScript first (`npm run build`) and publish `index.html`, `styles.css`, and `dist/main.js`.

## Portfolio content

Content is based on the supplied CV. No client outcomes, performance metrics, client testimonials or live product URLs have been invented.
