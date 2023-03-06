
//...................................
import React, { useEffect, useState } from "react";
// import "./App.css";
import pic from "/home/student/Development/code/phase5/movie-front/src/bird.jpg"
import Card from "./MovieCard.js";
import axios from "axios";
import MovieSearch from "./MovieSearch";
import AddNewMovie from "./AddNewMovie.js";
import EditMovie from "./EditMovie.js";


function Main() {
  //const[selected, setSelected]=useState([])
  const [movies, setBots] = useState([]);
  const [movieState, setMovieState] = useState([]);
   
  useEffect(() => {
    axios("http://localhost:9292/movies").then((res) => {
      setBots(res.data);

      // setRobotName(res.data.id);
    });
  }, []);

  function handleAdd(movie) {
    
    console.log("JWGFJKK", movie);
    const selectedMovies = [...movieState];
    console.log("sele", selectedMovies);
    selectedMovies.push(movie);
    setMovieState(selectedMovies);
    
    
  
  }
  function Search(searchValue) {
    let result = movies.filter((movie) => {
      return movie.title.toLowerCase().includes(searchValue.toLowerCase()) 
    });
    if(Array.isArray(result)) {
      setBots(result);
    }
  }



  // const deleteArrayItem = function (itemToBeRemoved) {
  //   console.log(itemToBeRemoved);
  //   // const tempTransactions = [...botState];
  //   const tempTransactions = Object.assign([],movieState);
  //   const findIndex = tempTransactions.findIndex(
  //     (a) => a.id === itemToBeRemoved.id
  //   );



  //   findIndex !== -1 && tempTransactions.splice(findIndex, 1);
  //   console.log("kdJSLKJFKJ", tempTransactions.length);
  //   setMovieState(tempTransactions);
  
  // };
  const deleteArrayItem = function (itemToBeRemoved) {
    console.log(itemToBeRemoved);
    axios
      .delete(`http://localhost:9292/movie/destroy/${itemToBeRemoved.id}`)
      .then((response) => {
        console.log(response);
        const tempTransactions = [...movieState];
        const findIndex = tempTransactions.findIndex(
          (a) => a.id === itemToBeRemoved.id
        );
        findIndex !== -1 && tempTransactions.splice(findIndex, 1);
        console.log("kdJSLKJFKJ", tempTransactions.length);
        setMovieState(tempTransactions);
      })
      .catch((error) => {
        console.log(error);
      });
  };
 
  return (
    <div>
      <div className="transactions-container">
        <div className="bankHeader">
          <div>
           
            <h2 className='header-two'>MOVIE FINDER<img src={pic} alt="brd" width= "80px" height= "60"/></h2>

           
          </div>
        </div>
        <AddNewMovie/>
        
        <MovieSearch search={Search} />
        <div className="selected-bots">
          {movieState.map((movie) => (
            <div key={movie.id}  className="unselect">
              <div className="card1" >
    
                      <div className="card-body1">
                        <h2 className="card-title2">Movie Title: </h2>
                        <h3 className="card-title3">{movie.title}</h3>
                        <button onClick={() => deleteArrayItem(movie)}  className="card-text2">DELETE  </button>
                        </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {movies.map((movie) => {
        return (
          
          <div className="display" key={movie.id}>
            <Card
              title={movie.title}
              year={movie.year}
              description={movie.description}
              image={movie.poster}
              selectedMovie={() => handleAdd(movie)}
            />
          </div>
          
        );
        
      })}
      <EditMovie/>
    </div>

  );
}
export default Main;
