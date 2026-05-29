# Firebase Functions TypeScript Project

This is a serverless project built with Firebase Cloud Functions and TypeScript.

## Tech Stack

- **Platform:** Firebase Cloud Functions (Gen 2)
- **Language:** TypeScript
- **Runtime:** Node.js

## Prerequisites

- Node.js (v18 or higher recommended)
- Firebase CLI (`npm install -g firebase-tools`)

## Installation

1. Clone this repository:
   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```

2. Install dependencies for the Cloud Functions:
   ```bash
   cd functions
   npm install
   ```

## Firebase Setup

To connect this repository to your own Firebase project:

1. Initialize or log into Firebase:
   ```bash
   firebase login
   ```
2. Connect to your existing Firebase project or create a new one:
   ```bash
   firebase use --add
   ```
   *Select your project from the list and give it an alias (e.g., `default`).*

## Local Emulator Setup

You can run your functions locally using the Firebase Emulator Suite.

1. Start the emulators:
   ```bash
   firebase emulators:start
   ```
2. For testing functions with hot-reloading (Watch mode), run this command in a separate terminal inside the `functions` directory:
   ```bash
   npm run build:watch
   ```

## Build Commands

Inside the `functions` directory, you can use the following commands:

- `npm run build`: Compiles TypeScript to JavaScript in the `lib/` directory.
- `npm run build:watch`: Compiles TypeScript and watches for changes.
- `npm run lint`: Runs ESLint to check for code quality and style issues.

## Deployment Commands

To deploy your functions to production:

```bash
firebase deploy --only functions
```

## Folder Structure

```
.
├── firebase.json       # Firebase configuration file
├── .gitignore          # Ignored files for version control
├── .firebaserc         # Project alias mapping (not tracked to keep it project-independent)
└── functions/          # Cloud Functions source code
    ├── src/            # TypeScript source files (write your code here)
    │   └── index.ts    # Main entry point for functions
    ├── package.json    # Dependencies and scripts for functions
    ├── tsconfig.json   # TypeScript configuration
    └── .eslintrc.js    # ESLint configuration
```

## Security Notes

- **Secrets and API Keys:** Ensure that no sensitive information (API keys, secrets, service account credentials) is ever hardcoded into the source files.
- **Environment Variables:** Use Firebase environment variables or `.env` files (which are ignored by Git) to manage sensitive configuration.
- **Project Independence:** The `.firebaserc` file is intentionally ignored so that this template can be cloned and used with any Firebase project safely.

## Troubleshooting

- **`firebase` command not found:** Ensure you have installed the Firebase CLI globally via `npm install -g firebase-tools`.
- **Functions fail to build:** Check if you have the required Node.js version installed. You can verify it via `node -v`. Make sure you ran `npm install` inside the `functions` directory.

---
*Disclaimer: This repository is intended for learning and demonstration purposes.*
