
# 🍔 BURGER HOUSE

## 📜 Table des matières
- **[📖 Description](#-description)**
- **[📂 Architecture du projet](#-architecture-du-projet)**
- **[🚀 Installation et exécution](#-installation-et-exécution)**
- **[📌 Améliorations possibles](#-améliorations-possibles)**
- **[👤 Skies-Land - Jonathan Araldi](#-skies-land---jonathan-araldi)**
- **[📷 Image de preview](#-image-de-preview)**
---

## 📖 Description
Projet développé en suivant un cours de **[Remote Monkey](https://www.youtube.com/@remotemonkey/videos)**.

- Initialisé avec **[Vite.js](https://vitejs.dev/)**
- Développé avec **[React](https://fr.react.dev/)** et **[Tailwind CSS](https://tailwindcss.com/)**
- Préconfiguration de Tailwind dans **`tailwind.config`** pour un large choix de classes utilitaires
- Utilisation de **`switch case`** dans les composants **`Button`**, **`Heading`** et **`HeadingTitle`**, me permettant de gérer les rendus de manière structurée et lisible, afin de centraliser la logique de décision dans un seul endroit.
- Intégration de **[react-alice-carousel](https://www.npmjs.com/package/react-alice-carousel)** pour un carrousel animé
- Adaptation des différentes sections de la landing page à tous type d'écran avec le **[Responsive Design de Tailwind CSS](https://tailwindcss.com/docs/responsive-design)**
- Déploiement du projet sur **[Netlify](https://www.netlify.com/)**

### 🔎 Accès au projet : **[Burger House](https://burger-house-by-jonathan-araldi.netlify.app/)**

## 📂 Architecture du projet
```
src/
│   App.jsx               # Composant principal
│   main.jsx              # Point d'entrée React
│   Router.jsx            # Gestion des routes
│
├── components/           # Composants réutilisables
│   ├── elements/         # UI de base (boutons, conteneurs)
│   │   ├── Button.jsx    # Bouton avec variations
│   │   ├── Container.jsx # Conteneur réutilisable
│   │   └── displayTitle/
│   │       ├── Heading.jsx       # Titres dynamiques
│   │       └── HeadingTitle.jsx  # Sous-titres formatés
│   ├── marketing/        # Sections de la landing page
│   │   ├── pageSections/
│   │   │   ├── Booking.jsx       # Section réservation
│   │   │   ├── Event.jsx         # Section événements
│   │   │   ├── Footer.jsx        # Pied de page
│   │   │   ├── Header.jsx        # En-tête principal
│   │   │   ├── HeroTop.jsx       # Bannière principale
│   │   │   ├── LastProducts.jsx  # Derniers produits
│   │   │   └── Products.jsx      # Liste des produits
│
├── css/                  # Styles CSS
│   ├── carousel.css      # Styles du carrousel
│   └── main.css          # Styles principaux
│
├── medias/               # Ressources médias
│   ├── images/           # Images classées par type
│   ├── svg/              # Icônes SVG
│
├── pages/                # Pages principales
│   └── HomePage.jsx      # Page d'accueil
│
└── public/               # Fichiers statiques
    ├── favicon.ico       # Icône du site
    └── manifest.json     # Configuration PWA

```
## 🚀 Installation et exécution
1 - Cloner le projet

```bash
  git clone https://github.com/ton-repo/burger-house.git
```
2 - Installer les dépendances

```bash
  npm install
```
3 - Lancer l'application

```bash
  npm run dev
```

## 📌 Améliorations possibles

- ✅ Ajouter des tests unitaires avec Jest & React Testing Library
- ✅ Implémenter un mode sombre
- ✅ Optimiser les performances du carrousel
- ✅ Ajouter une API pour récupérer les produits dynamiquement

## 👤 Skies-Land - Jonathan Araldi

- **[Portfolio](https://portfolio-jonathan-araldi.netlify.app/)** | **[LinkedIn](https://www.linkedin.com/in/jonathan-araldi/)** | **[GitHub](https://github.com/Skies-Land)**

## 📷 Image de preview
![preview](https://github.com/user-attachments/assets/276ac340-955f-4c54-b5c9-e8f28ad5cbf0)
