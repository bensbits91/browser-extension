# Simple Browser Extension

A simple browser extension built with [Vite](https://vitejs.dev/), [React](https://react.dev/), and [TypeScript](https://www.typescriptlang.org/).

## Features

- Popup UI with React components (Counter, Input, Script Injector, Tab Info)
- Dark mode toggle
- Saves input data using Chrome storage
- Injects scripts into the current tab
- Displays current tab information
- Background and content scripts

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

```sh
npm install
```

### Development

To start the development server:

```sh
npm run dev
```

### Build

To build the extension for production:

```sh
npm run build
```

The output will be in the `dist/` directory.

### Lint

To lint the code:

```sh
npm run lint
```

## Load the Extension in Chrome

1. Build the project (`npm run build`).
2. Open Chrome and go to `chrome://extensions/`.
3. Enable "Developer mode".
4. Click "Load unpacked" and select the `dist/` directory.

## Project Structure

- `src/` - Source code
  - `components/` - React components
  - `hooks/` - Custom React hooks
  - `utils/` - Utility functions for Chrome APIs
  - `background/` - Background script
  - `content/` - Content script
  - `popup/` - Popup HTML and entry point
- `public/manifest.json` - Chrome extension manifest

## Permissions

This extension requests the following permissions:
- `storage`
- `activeTab`
- `scripting`

See [`public/manifest.json`](public/manifest.json) for details.

## License

MIT