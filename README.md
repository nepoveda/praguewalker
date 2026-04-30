# Prague Walker 🚶‍♂️✨

A modern web experience built with Next.js, designed to showcase immersive storytelling and interactive content for Prague's history and culture.

This project utilizes the App Router architecture, Tailwind CSS for styling, and is configured for **standalone deployment** for optimal performance and minimal footprint in production environments.

## 🚀 Getting Started

Follow these steps to get a local copy of the project running on your machine.

### Prerequisites

*   Node.js (v18+)
*   npm or yarn or pnpm

### Installation

1.  Clone the repository:
    ```bash
    git clone [repository-url]
    cd praguewalker
    ```
2.  Install dependencies:
    ```bash
    # Using npm
    npm install
    # OR using yarn
    yarn install
    # OR using pnpm
    pnpm install
    ```

### Running Locally (Development)

Start the development server to see the live result. The page will auto-update as you edit files.

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## ⚙️ Build and Deployment (Production)

Since this project is configured for `output: "standalone"`, the deployment process requires specific steps to ensure all necessary server files are included.

### 1. Building the Project

Run the build command to generate optimized, production-ready assets. This creates the standalone directory structure in `.next/`.

```bash
npm run build
# or
yarn build
# or
pnpm build
```

### 2. Running Standalone Server

To serve the application in a production environment (like a Docker container or a dedicated server), execute the generated server file:

```bash
node .next/standalone/server.js
```

## ✨ Features & Technologies

*   **Next.js App Router:** Modern React framework for building scalable web applications.
*   **Tailwind CSS:** Utility-first CSS framework for rapid styling and design consistency.
*   **Standalone Output:** Optimized build process resulting in a minimal, self-contained deployment package.
*   **Dynamic Components:** Utilizes advanced animation techniques (e.g., `reveal-up`, hero slideshow) for an engaging user experience.

## 📚 Learn More

To learn more about Next.js and best practices:

*   [Next.js Documentation](https://nextjs.org/docs) - Comprehensive guide on features and API.
*   [Learn Next.js](https://nextjs.org/learn) - An interactive tutorial for beginners.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

