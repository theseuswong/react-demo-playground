# Trying to help those front end engineer to be a product owner

This project aims to create a playground for rendering React web app in a simulated web browser or mobile frame. In AI era, front end engineer can be the IT product owner and change their job nature to become less coding, more interacting with users.

Designer can start with Figma, front end engineer can start with development!

## Workflow

TBC

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
      - `WebBrowserPlayground.tsx`: Main playground component
      - `TestingFrame.tsx`: YouTube video frame component
  - `pages/`: Application pages
    - `TestingPage.tsx`: Testing page with embedded content
- `public/`: Static assets
- `node_modules/`: Installed dependencies

## Features

The current implementation includes:
- Responsive Stack layout from Material UI
- Embedded YouTube video players using iframes
- Customizable settings for different testing scenarios
- TypeScript type checking and ESLint integration

The application is configured with Vite's default settings for optimal development experience.