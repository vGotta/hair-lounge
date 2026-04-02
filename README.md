# Hair Lounge

**Site professionnel de coiffure – Prototype Next.js + TypeScript + Tailwind CSS**

---

## Description

Hair Lounge est un site web moderne pour un salon de coiffure, conçu pour présenter :

- La section **Accueil** avec un Hero attractif
- La page **Services** détaillant les prestations (coupes, coloration, soins)
- La page **À propos** pour présenter le salon et son équipe
- La page **Galerie** avec des exemples de coiffures
- La page **Contact** pour prendre rendez-vous facilement

Le projet est construit avec **Next.js 13**, **TypeScript** et **Tailwind CSS**, pour une expérience rapide et responsive.

---

## Technologies utilisées

- [Next.js 13](https://nextjs.org/) – Framework React moderne
- [TypeScript](https://www.typescriptlang.org/) – Typage statique
- [Tailwind CSS](https://tailwindcss.com/) – Framework CSS utilitaire
- Git & GitHub – Gestion de version
- SSH – Déploiement sécurisé

---

## Installation locale

1. Cloner le dépôt :

```bash
git clone git@github.com:vGotta/hair-lounge.git

2. Installer les dépendances : 

```bash
npm install
# ou
yarn install

3. Lancer le serveur de développement :

```bash
npm run dev
# ou
yarn dev

Le site sera disponible sur http://localhost:3000
.

Structure du projet

app/
├─ page.tsx         # Accueil / Hero
├─ services/page.tsx # Services
├─ about/page.tsx   # À propos
├─ gallery/page.tsx # Galerie
├─ contact/page.tsx # Contact
components/
├─ Hero.tsx
├─ Services.tsx
├─ About.tsx
├─ Gallery.tsx
└─ Contact.tsx
public/
└─ images/         # Images du site

Auteurs / Contact
Développeur : Vincent Gotta
Email : gottavincent@gmail.com
GitHub : vGotta