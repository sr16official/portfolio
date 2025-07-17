# Deploying to GitHub

## Prerequisites
- GitHub account
- Git installed on your local machine
- Node.js installed locally

## Steps to Deploy

### 1. Download the Project
Download all the project files from this environment to your local machine.

### 2. Initialize Git Repository
```bash
cd your-project-folder
git init
```

### 3. Create GitHub Repository
1. Go to GitHub.com
2. Click "New repository"
3. Name it "sourabh-singh-portfolio" (or your preferred name)
4. Don't initialize with README (since we already have files)
5. Click "Create repository"

### 4. Add Remote Origin
```bash
git remote add origin https://github.com/YOUR_USERNAME/sourabh-singh-portfolio.git
```

### 5. Add and Commit Files
```bash
git add .
git commit -m "Initial commit: Machine Learning Engineer Portfolio"
```

### 6. Push to GitHub
```bash
git branch -M main
git push -u origin main
```

## Automatic Deployment Options

### Option 1: Netlify (Recommended)
1. Connect your GitHub repo to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Auto-deploy on every push

### Option 2: Vercel
1. Import your GitHub repo to Vercel
2. Framework preset: Vite
3. Auto-deploy on every push

### Option 3: GitHub Pages
1. Go to repository Settings > Pages
2. Source: GitHub Actions
3. Create `.github/workflows/deploy.yml` (see below)

## GitHub Actions Workflow (for GitHub Pages)
Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Build
      run: npm run build
    
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

## Local Development
```bash
npm install
npm run dev
```

## Build for Production
```bash
npm run build
npm run preview
```