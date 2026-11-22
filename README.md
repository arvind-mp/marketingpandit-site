# Marketing Pandit — Website

Placeholder website for **marketingpandit.in**, an IT consulting agency.

## Stack
- Plain HTML, CSS, JavaScript — no framework, no build step
- Hosted on **GitHub Pages**
- Custom domain: `marketingpandit.in` (DNS managed via GoDaddy)

## Project Structure
```
marketingpandit-site/
├── index.html   — Main page (single-page layout)
├── style.css    — All styles
├── main.js      — Minimal JS (scroll observer)
├── CNAME        — Custom domain for GitHub Pages
└── README.md    — This file
```

## Local Preview
Just open `index.html` in a browser — no build step required.

## Deployment
Pushes to `main` branch auto-deploy via GitHub Pages.

## DNS (GoDaddy → GitHub Pages)
Add these records in GoDaddy DNS:

| Type  | Name | Value                  |
|-------|------|------------------------|
| A     | @    | 185.199.108.153        |
| A     | @    | 185.199.109.153        |
| A     | @    | 185.199.110.153        |
| A     | @    | 185.199.111.153        |
| CNAME | www  | marketingpandit.github.io |

Then enable **HTTPS** in GitHub Pages settings.
