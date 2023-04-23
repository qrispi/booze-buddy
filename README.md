# Booze Buddy

## Abstract:
[//]: <>
Booze Buddy is your cocktail companion! For users who never know what to order at the bar or for bartenders for are tired of hearing "suprise me" from their patrons, this app will find a random cocktail recipe for you! And if you answer three easy questions, you will get a 'random' cocktail that matches your preferences! 
I utilized Create React App to build the application with functional components and hooks. I also utilized Router v5 to convert this single-page application into one that functions like a multi-page application with the ability to go directly to different URL paths. The App component holds the state of the random cocktail component and implements the useEffect hook to ensure a new random cocktail on load as well as passing a function to trigger a new fetch from within the Cocktail component (data down, actions up). The Quiz component controls its own state and performs multiple live fetches and filters of the API data as the user answers 3 questions. Lighthouse scores the application at 100 for accessibility and there are zero WAVE errors. Cypress end-to-end testing was also utilized to thoroughly test all user stories and error handling for server or client errors.

## Installation Instructions:
[//]: <>
1. Fork and clone [this repo](https://github.com/qrispi/booze-buddy).
1. Copy the SSH key from the green "Code" button.
1. In your terminal, use the command `git clone git@github.com:[https://github.com/qrispi/booze-buddy]`.
1. Run `npm install`.
1. Do NOT run `npm audit fix --force` when prompted.
1. Open the repo in your text editor to make any changes or inspect code.
1. Run `npm start` in your terminal.
1. Copy and paste the generated `localServer` address that your terminal provides into your browser address bar.

## Preview of App:
[//]: <>



## Context:
[//]: <> 
- This was a solo project completed in just under a week with total time spent on it around 40 hours.

## Contributors:
[//]: <>
- [Christopher Baum](https://github.com/qrispi)

## Learning Goals:
[//]: <>
1. Gain further competency with React & Hooks
1. Gain further competency testing React components & asynchronous JS using Cypress
1. Practice refactoring
1. Create a multi-page UX using Router
1. Create personas and user stories to describe my target audience
1. Work within constraints to deliver a product for my niche audience, which helps solve a problem unique to them
1. Gain further competency deploying applications

## Technologies Used:
[//]: <>
- Fetch API
- Webpack
- Cypress E2E Testing
- React Framework
- Router v5
- LightHouse
- Wave Evaluation
- GitHub Issues & Project Board
- JavaScript
- CSS
- HTML

## Wins + Challenges:
[//]: <>
- Wins:
  - Implementing a gradient text and general color scheme from an image was an awesome CSS win.
  - Cypress testing is much more robust and natural than in previous projects.
  - General site navigation and rendering feels much more intuitive and natural than in previous projects with the styling of all elements following a common, well-defined theme.
- Challenges:
  - The API does not return data as I originally had hoped for during planning of this project. A lot of the common ingredients are stored under multiple names making it difficult to return a large pool of results from a single fetch.
  - I also purchased an expanded API key that lets you search for multiple ingredients at once thinking I could search for all types of rum during one fetch but unfortunately it is an exclusive multiple ingredient search meaning that it only returns cocktails that contain all of those ingredients.
  
## Enhancement Wishlist:
[//]: <>
- Add a better logo image file
- Add a cocktail shaker animation during page/image loading
- Allow users to search specifically for non-alcoholic beverages
- Allow users to input what ingredients they currently have and only be shown recipes including all of those ingredients
- Allow users to input ingredients that they don't like and then will not be shown recipes that include those ingredients
- Allow users to favorite recipes they find that they really like and view them later
