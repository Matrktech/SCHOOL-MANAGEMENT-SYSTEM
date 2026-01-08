# Quick Start Guide - Run the Web App

## Step 1: Install Dependencies

Open your terminal in the project folder and run:

```bash
npm install
```

This will install all required packages (React, Tailwind CSS, Firebase, etc.)

## Step 2: Configure Firebase (Optional for now)

The app will run without Firebase, but for full functionality:

1. Open `src/firebase.js`
2. Replace the placeholder values with your Firebase credentials
3. Or leave it as is to test the UI first

## Step 3: Start the Development Server

Run this command:

```bash
npm run dev
```

You should see output like:
```
  VITE v5.0.8  ready in 500 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

## Step 4: Open in Browser

Open your web browser and go to:
```
http://localhost:5173
```

That's it! Your app should now be running! 🎉

---

## Troubleshooting

**If you get an error about Node.js:**
- Make sure you have Node.js installed (version 16 or higher)
- Download from: https://nodejs.org/

**If npm install fails:**
- Try deleting `node_modules` folder and `package-lock.json` (if exists)
- Run `npm install` again

**If the port is already in use:**
- The app will automatically try a different port
- Check the terminal output for the correct URL

---

## Other Useful Commands

- **Stop the server**: Press `Ctrl + C` in the terminal
- **Build for production**: `npm run build`
- **Preview production build**: `npm run preview`
