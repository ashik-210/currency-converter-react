# Currency Converter

A responsive currency converter web app built with React and Tailwind CSS. Fetches live exchange rates for 150+ currencies and lets users instantly convert between them, with a one-click swap feature.

🔗 **Live Demo:** [currency-converter-react-sooty.vercel.app](https://currency-converter-react-sooty.vercel.app/)

## Features

- 🌍 Real-time currency conversion (150+ currencies)
- 🔄 Swap "from" and "to" currencies instantly
- 📱 Fully responsive design (mobile-friendly)
- ✅ Clean input validation — no leading zeros (e.g. `010` → `10`), 2-decimal precision on converted amounts
- ⚡ Custom React hook (`useCurrencyInfo`) for fetching live exchange rate data

## Tech Stack

- **React** — UI library
- **Tailwind CSS** — styling
- **Vite** — build tool
- **Currency API** ([fawazahmed0/exchange-api](https://github.com/fawazahmed0/exchange-api)) — free exchange rate data
- **Vercel** — deployment

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/ashik-210/currency-converter-react.git

# Navigate into the project directory
cd currency-converter-react

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173` (or the port Vite assigns).

## Project Structure







# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
