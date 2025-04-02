# Movie Recommendation App

## Description

This is a **React-based movie recommendation application** that fetches movie data from **The Movie Database (TMDB) API** and allows users to search for movies by title. The app displays a list of movies along with their details such as title, overview, and poster.

## Features

- **Search Movies**: Users can search for movies by typing a keyword.
- **Recommendations**: Recommends similar movies
- **Movie Details**: Displays movie titles, overviews, and posters.
- **Dynamic Rendering**: Uses React components to display search results dynamically.

## Technologies Used

- **React.js** - Frontend framework
- **Axios** - For API requests
- **React Router** - For navigation
- **TMDB API** - Fetching movie data

## Installation and Setup

### Prerequisites

Make sure you have the following installed:

- Node.js (v14+ recommended)
- npm or yarn

### Steps to Run the Project

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/movie-recommendation-app.git
   cd movie-recommendation-app
   ```

2. **Install Dependencies**

   ```bash
   npm install  # or yarn install
   ```

3. **Create a ********************`.env`******************** File (Optional)**
   If you want to store your API key separately, create a `.env` file and add:

   ```
   REACT_APP_TMDB_API_KEY=your_api_key_here
   ```

   Then update API calls to:

   ```js
   const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
   ```

4. **Start the Development Server**

   ```bash
   npm start  # or yarn start
   ```

5. **Open in Browser**
   The application will be available at:

   ```
   http://localhost:3000
   ```

## API Usage

The app fetches movie data using the TMDB API. The search endpoint:

```
https://api.themoviedb.org/3/search/movie?api_key=YOUR_API_KEY&language=en-US&page=1&include_adult=false&query=SEARCH_TERM
```

## Project Structure

```
movie-recommendation-app/
│── src/
│   ├── components/
│   │   ├── Search.js
│   │   ├── Card.js
│   ├── App.js
│   ├── index.js
│── public/
│── package.json
│── README.md
```

## Troubleshooting

### Common Errors and Fixes

1. **API Not Working (404 Error)**

   - Ensure the API key is valid.
   - Check the API URL format.
   - Log the API response in `console.log()` to debug.

2. **Search Results Not Displaying**

   - Ensure `this.props.match.params.term` is correctly passed.
   - Check React Router setup.
   - Debug with `console.log(SearchTerm);`

## Future Enhancements

- Add **pagination** for search results.
- Implement **movie recommendations** based on user search.
- Improve **UI/UX with better styling**.

## License

This project is open-source and available under the **MIT License**.

---

**Developed by Ningaraddi Raddi**

