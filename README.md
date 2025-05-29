[![Netlify Status](https://api.netlify.com/api/v1/badges/2835ab69-44da-4dda-add4-b29ec4275243/deploy-status)](https://app.netlify.com/sites/yoma-website/deploys)

# Yoma Hebammen

## Local Development

### 1. Clone the Repository

```sh
git clone https://github.com/yoma-hebammen/yoma-hebammen.git
```

### 2. Install Node.js

The easiest way to install Node.js is via [NVM](https://github.com/nvm-sh/nvm), which lets you manage and switch between multiple Node versions:

```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
```

> **Note:** This script modifies your shell profile (`~/.bashrc`, `~/.bash_profile`, `~/.zshrc`, or `~/.profile`) to enable NVM.

Install and use the required Node.js version (specified in `.nvmrc`) with:

```sh
cd yoma-hebammen
nvm install
nvm use
```

### 3. Install Dependencies

Install all required packages to build the site and run the development server:

```sh
npm install
```

### 4. Run the Development Server

After installing Node.js and the dependencies (only needed once), you can start the local development server:

```sh
npm start
```

Open your browser at: [http://localhost:3000](http://localhost:3000)

> **Note:** Image loading currently does not work in local development, because image transformations are hardcoded to run through the Netlify image CDN.
