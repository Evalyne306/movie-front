
import React from "react"



function Card({index,title,image,year,description, selectedMovie}){
return(
  <>

     
  <div>
<div className="card-deck">
<button onClick={selectedMovie} className="card"key={index}>
    <img className="card-img" src={image}alt={title} />
  <div className="card-body">
    <h2 className="card-title">Movie Title: {title}</h2><br></br>
    <div className="card-text">Year: {year} </div>
    </div>
    <div className="overview">
        <h2>Description:</h2>
    <h4> {description} </h4> 
  
  </div>
</button>
</div>
</div>


</>
);
}
export default Card