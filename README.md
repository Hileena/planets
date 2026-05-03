# Milky Way Galaxy

An interactive 3D solar system explorer built with React, TypeScript, and Three.js.

## Features

- **3D Solar System** — all 8 planets rendered with texture maps using Three.js
- **Orbital Animation** — toggle planetary rotation and orbits with a camera pull-back effect
- **People in Space** — live sidebar widget showing who is currently aboard spacecraft, via the [Open Notify API](http://open-notify.org/)
- **Orbit Controls** — drag to rotate, scroll to zoom, pan to explore

## Tech Stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Three.js](https://threejs.org/) — 3D rendering
- [MUI](https://mui.com/) — UI components
- [Vite](https://vitejs.dev/) — build tooling

## Getting Started

```bash
npm install
npm run dev
```

## Project Structure

```
src/
├── App.tsx           # Layout — sidebar + main area
├── App.module.css    # Page-level styles
├── threeScene.tsx    # Three.js solar system scene
├── peopleInSpace.tsx # Live ISS crew widget
└── index.css         # Global reset and theme variables
```

## Textures

Planet texture maps should be placed in `public/textures/`:

```
public/textures/
├── sun.jpg
├── mercury.jpg
├── venus.jpg
├── earth.jpg
├── mars.jpg
├── jupiter.jpg
├── saturn.jpg
├── uranus.jpg
└── neptune.jpg
```
