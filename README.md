# Crypto Jaiyq - Cryptocurrency Tracker 

## Project Overview

Crypto Jaiyq is a cryptocurrency tracking web application that provides real-time information about various cryptocurrencies. It fetches live data from the CoinGecko API and displays it in an interactive and user-friendly interface. The project is designed as a Single Page Application (SPA) using React Router, enabling users to navigate between pages seamlessly while keeping the app responsive and efficient.

This project demonstrates my ability to work with real-world APIs, manage state with React Context, and create dynamic, data-driven applications. By integrating a coin search functionality, interactive charts, and a currency switcher, the project showcases a wide range of skills essential for modern web development.

## Features

- **Real-Time Cryptocurrency Data**: Fetches real-time data on multiple cryptocurrencies using the CoinGecko API.
- **Interactive Price Charts**: Displays historical price data for the past 10 days using React Google Charts.
- **Currency Switching**: Allows users to switch between different currencies (USD, EUR, CNY) with React Context managing the global state.
- **Coin Search Functionality**: Includes a search input field that filters and displays coins based on user input.
- **Multiple Pages in a SPA**: Uses React Router for navigation between the homepage and individual coin details without page reloads.
- **Responsive Design**: The app is fully responsive, utilizing CSS Grid, Flexbox, and media queries to ensure usability on various screen sizes.

## Technologies Used

- **React (v18.3.1)**: The core JavaScript library used to build the application's UI.
- **React Router DOM (v6.26.2)**: For managing client-side routing, enabling navigation between multiple pages without reloading the app.
- **React Google Charts**: To render interactive, responsive charts displaying historical cryptocurrency price data.
- **CoinGecko API**: The primary data source for real-time cryptocurrency information.
- **React Context API**: To manage global state, particularly for currency switching, ensuring that different components of the app can share state easily.
- **CSS Grid, Flexbox, Media Queries**: For responsive design and layout adjustments across different screen sizes.
- **JavaScript (ES6+)**: Leveraging modern JavaScript features including hooks (`useState`, `useEffect`), array methods (`map`, `filter`), and async/await for API handling.

## Key Components

### Coin.js

This component handles the display of individual cryptocurrency details, including a name, symbol, and interactive price chart for the past 10 days. It fetches both real-time coin data and historical price data from the CoinGecko API. React hooks (`useState`, `useEffect`) are used to manage the fetched data, and React Context is leveraged for currency selection.

### Home.js

The homepage displays an overview of available cryptocurrencies, fetched from the CoinGecko API. It includes a search bar where users can filter coins dynamically, showing relevant results in real-time. A table layout displays the rank, price, 24-hour change, and market cap of each cryptocurrency, with links to individual coin details using React Router DOM.

### CoinContext.js

This file sets up React Context to handle global state management, particularly for storing the list of all cryptocurrencies and the selected currency. It ensures that currency switching and cryptocurrency data are available throughout the app.

## Project Goals and Motivation

The primary motivation for this project was to practice with external APIs, organize and manage state across multiple components, and build a responsive, modern web application. The decision to fetch real-time data from multiple API endpoints instead of storing static data reflects industry practices, where up-to-date data is crucial for user experience. This project also showcases my ability to structure a web application using modular components and React Router for navigation, while still maintaining the SPA architecture.


## Installation and Setup

To run this project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/amir-amirov/react-crypto-jaiyq.git
   ```
   
2. Navigate to the project directory:
   ```bash
   cd react-crypto-jaiyq
   ```
   
3. Install dependencies:
   ```bash
   npm install
   ```
   
4. Run the development server:
   ```bash
   npm start
   ```

The app should now be running at `http://localhost:3000`.

## Future Improvements

- Add more animations for a smoother UI experience.
- Connect Back-end for storing user's information.
- Add User Authentication functionality.

## Note

- If you are about to clone and use this project, please get and add your own access key from CoinGecko API.
