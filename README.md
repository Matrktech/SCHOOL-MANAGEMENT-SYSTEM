# School Attendance Web App

A modern school attendance management system built with React.js and Tailwind CSS.

## Features

- 📊 **Dashboard** - Overview of attendance statistics
- 👥 **Student List** - Manage and view all students
- 📷 **Attendance Scanner** - QR code scanning and manual entry
- 📈 **Reports** - Generate attendance reports and analytics

## Tech Stack

- React.js 18
- Tailwind CSS
- Firebase (Firestore & Auth)
- React Router
- Vite

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Configure Firebase:
   - Open `src/firebase.js`
   - Replace the placeholder values with your Firebase project credentials
   - Get your credentials from [Firebase Console](https://console.firebase.google.com/)

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
src/
├── components/
│   └── Sidebar.jsx          # Navigation sidebar
├── context/
│   └── AuthContext.jsx      # Global auth state management
├── pages/
│   ├── Dashboard.jsx        # Dashboard page
│   ├── StudentList.jsx     # Student list page
│   ├── AttendanceScanner.jsx # Scanner page
│   └── Reports.jsx         # Reports page
├── firebase.js              # Firebase configuration
├── App.jsx                  # Main app component
├── main.jsx                 # Entry point
└── index.css               # Global styles
```

## Theme

The app uses a clean Education theme with:
- **White** - Primary background
- **Slate Gray** - Secondary text and borders
- **Navy Blue** - Primary accent color

## State Management

The app uses React Context API for global state management. The `AuthContext` manages the logged-in status of the school admin.

## Firebase Setup

1. Create a new Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Firestore Database
3. Enable Authentication
4. Copy your Firebase config and paste it into `src/firebase.js`

## Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Deploy to Netlify

The project is configured for easy deployment to Netlify. You can deploy in two ways:

### Option 1: Deploy via Netlify Dashboard (Recommended)

1. **Push your code to GitHub/GitLab/Bitbucket**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Connect to Netlify**:
   - Go to [Netlify](https://www.netlify.com/)
   - Sign up or log in
   - Click "Add new site" → "Import an existing project"
   - Connect your Git repository
   - Netlify will automatically detect the build settings from `netlify.toml`:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

3. **Configure Environment Variables** (if needed):
   - Go to Site settings → Environment variables
   - Add any Firebase or other API keys as environment variables

### Option 2: Deploy via Netlify CLI

1. **Install Netlify CLI**:
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**:
   ```bash
   netlify login
   ```

3. **Deploy**:
   ```bash
   netlify deploy --prod
   ```

4. **First-time setup**:
   - Follow the prompts to link your site
   - Netlify will use the settings from `netlify.toml`

### Netlify Configuration

The project includes:
- `netlify.toml` - Netlify configuration file with build settings
- `public/_redirects` - SPA routing support for React Router

Your app will be live at `https://your-site-name.netlify.app`!

## License

MIT
