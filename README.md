# Movie Finder 

## Description
Movie Finder is a web application that allows users to add, view, search, update, and delete movies. Users can register and login to the application to access these features.

## Features
- User registration and login: Users can create a new account or log in to an existing account to access the application.
- Add new movie: Logged in users can add a new movie to the database.
- View all movies: Logged in users can view all the movies they have added to the database.
- View all available movies: Logged in users can view all the movies available in the database.
- Search movies: Logged in users can search for a movie through its title or year.
- Update movie details: Logged in users can update the details of movies they added to the database.
- Delete movie details: Logged in users can remove the details of movies they added to the database.
- Authentication: Users cannot update or delete movies they have not added. In order to use the application, the user must be logged in.

## project Set-up
### Option 1 (live link)
*If you want to see the app running in real-time directly, you can just click on this link:
[https://movie-finder-project.vercel.app/]

### Option 2 (Cloning the repository)
1. Open terminal and make a folder using 
mkdir <filename>
2. Cd the folder 
cd <filename>
3. Create react app on the same folder
npx create-react-app@latest ./
Cloning the repository:
press git clone https://github.com/Evalyne on your terminal
4. Open the directory 
code .
5. Make sure you `install npm` for the required dependancies to be added.
6. Open the application on your prefered browser.
7. Run `npm start` to view the app in your prefered browser.

## Technology used 
Frontend: React.js
Backend: source 'https://rubygems.org/'
gem 'sinatra', '~> 3.0', '>= 3.0.5'
gem 'activerecord', '~> 7.0', '>= 7.0.4.2'
gem 'rake', '~> 13.0', '>= 13.0.6'
gem 'sqlite3', '~> 1.6', '>= 1.6.1'
gem 'faker'
gem 'sinatra-activerecord', '~> 2.0', '>= 2.0.26'
gem 'puma', '~> 6.1'
gem 'sinatra-cross_origin', '~> 0.4.0'
gem 'require_all', '~> 3.0'
gem 'rack-cors'
group :development do 
    gem 'rerun', '~> 0.14.0'
    gem 'pry'
end

## Api Endpoints
/movies: GET request to retrieve all movies.
/movies/search: POST request to search for movies by title or year.
/movies/create: POST request to create a new movie.
/movies/:id: GET request to retrieve a movie by its ID.
/movies/:id: PUT request to update a movie by its ID.
/movies/:id: DELETE request to delete a movie by its ID.
/users: POST request to create a new user.
/login: POST request to log in a user.

## Author
Evalyne Wanjiku