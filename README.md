# Trying to help front end developer to be a product owner

```
In a small development team, if I have time to work on Figma, I can finish the web application development using AI!
```

This project aims to create a playground for rendering React web app in a simulated web browser or mobile frame. In AI era, front end engineer can be the IT product owner and change their job nature to become less coding, more interacting with users.

## Idea

- ⭐️ Leverage Git Submodule to import the components (Still working on the development experience)
- ⭐️ Fully interactive, not just screenshots of storyboard
- ⭐️ Why not using browser? Browser can only show once screen at a time, user may lose track when the app has been navigated

## Expected Workflow

### Step 1
```
Complete the MVP front end product using AI
```
### Step 2
```
Define the key features and scenes
```
### Step 3
```
Import the pages and components into this project
```
### Step 4
```
Set scenes and update the setting attribute in the Playground component
```
### Step 5
```
Demo the project step to audience and get feedback for adjustment
```
### Step 6
```
Once the UI/UX design has been signed off, switch back to the main project and deploy
```

## React + TypeScript + Vite - Web/Mobile Playground

This template provides a minimal setup for a web browser playground application using React, TypeScript, and Vite. The project is designed to demonstrate and test web browser frame functionality with embedded content.

## Project Purpose

The main purpose of this project is to provide a testing environment for web browser and mobile frames. It currently features:
- Embed your React Project into a browser/mobile frame for responsive and interactive demo
- Give audience a quick look and feel on the process walkthrough

## Getting Started

1. Clone the repository
2. Install dependencies:
```bash
npm install
```
3. Start the development server:
```bash
npm run dev
```

The project will be available at http://localhost:3000 by default.

## Project Structure

Here's a basic overview of the folder structure:

- `src/`: Source directory
  - `assets/`: The iPhone and Browser frame static images
  - `components/`: Reusable React components
    - `playgrounds/`: Playground components for testing different features
     - `web/`: Playground components for testing on web browser
       - `WebBrowserPlayground.tsx`
     - `mobile/`: Playground components for testing on mobile
       - `MobilePlayground.tsx`
  - `pages/`: Application pages
    - `TestingPage.tsx`: Testing page to be embedded to the frame

## Features

The current implementation includes:
- Responsive Stack layout from Material UI
- Embedded YouTube video players using iframes
- Customizable settings for different testing scenarios
- TypeScript type checking and ESLint integration

The application is configured with Vite's default settings for optimal development experience.