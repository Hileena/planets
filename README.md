# Milky Way Galaxy

An interactive 3D solar system explorer built with React, TypeScript, and Three.js.

**[Live Demo](https://planets-one.vercel.app/)**

## Features

- **3D Solar System** — all 8 planets rendered with texture maps using Three.js
- **Orbital Animation** — toggle planetary rotation and orbits with a camera pull-back effect
- **Planet Details** — click any planet to view live data (mass, radius, orbital period, semi-major axis, temperature, distance from Earth, host star mass and temperature) fetched from the [API Ninjas Planets API](https://api-ninjas.com/api/planets)
- **Moonwalker Guessing Game** — a sidebar mini-game where you guess how many people have walked on the moon
- **Orbit Controls** — drag to rotate, scroll to zoom, pan to explore

## Tech Stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Three.js](https://threejs.org/) — 3D rendering
- [MUI](https://mui.com/) — UI components
- [react-icons](https://react-icons.github.io/react-icons/) — icon library
- [react-spinners](https://www.davidhu.io/react-spinners/) — loading spinner
- [Vite](https://vitejs.dev/) — build tooling
- [Vitest](https://vitest.dev/) + [Testing Library](https://testing-library.com/) — unit tests

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Set up your API key

Planet data is fetched from [API Ninjas](https://api-ninjas.com/api/planets). Create a free account to get an API key, then:

```bash
cp .env.example .env
```

Edit `.env` and replace `your_api_key_here` with your key:

```
VITE_NINJA_PLANETS_API_KEY=your_api_key_here
```

The key is used server-side via the Vite dev proxy (`/api` → `https://api.api-ninjas.com`) and is never exposed to the browser.

### 3. Run the dev server

```bash
npm run dev
```

### 4. Run tests

```bash
npm test
```

## Project Structure

```
src/
├── App.tsx                          # Layout — sidebar + main area
├── App.module.css                   # Page-level styles
├── index.css                        # Global reset and theme variables
├── setupTests.ts                    # Vitest global test setup
├── components/
│   └── loadingSpinner.tsx           # Shared loading spinner
├── hooks/
│   └── usePlanets.ts                # Fetches all 8 planets in parallel
├── mainView/
│   ├── index.tsx                    # Main view wrapper
│   └── solarSystem.tsx              # Three.js solar system scene
└── sideBar/
    ├── index.tsx                    # Sidebar panel — planet details or prompt
    ├── planetDetails/
    │   └── planetDetails.tsx        # Planet stats shown on click
    └── moonwalkGuessingGame/
        └── moonwalkerGame.tsx       # Moonwalker guessing game modal
```

## Textures

Planet texture maps should be placed in `public/textures/`:

```
public/textures/
├── Sun.jpg
├── Mercury.jpg
├── Venus.jpg
├── Earth.jpg
├── Mars.jpg
├── Jupiter.jpg
├── Saturn.jpg
├── SaturnRing.jpg
├── Uranus.jpg
└── Neptune.jpg
```
