# PiTemps

![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![Raspberry Pi](https://img.shields.io/badge/-Raspberry_Pi-C51A4A?style=for-the-badge&logo=Raspberry-Pi)

A website you can self-host on your Raspberry Pi to easily view the CPU temperatures of your Pi.

## Getting Started

### Prerequisites (development server)

- **Node/NPM** or **Bun**

### Prerequisites (deployment server)

- A **Raspberry Pi**, running **PiOS** (regular or lite)
- **Node/NPM** or **Bun**
- **PM2** (optional, but recommended for auto-restarts)

### Installation

```
$ npm i
$ npm run dev
```

## Deployment

When deploying the website (and actually reading the temperatures), you will need to copy the `.env.example` file and rename it to `.env`:

```
cp .env.example .env
```

This will make sure it actually reads the temperatures, instead of using a placeholder value (for development purposes).

To build the project for production, run this command:

```
npm run build
```

If you want, you can use the `ecosystem.config.js` file to easily start PM2. (you might want to change `bun` to `npm`, depending on your server setup)
