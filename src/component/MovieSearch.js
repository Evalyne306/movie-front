import React,{ useState} from "react";



function MovieSearch({search}) {
  const [searchItem, setSearchItem]= useState("")
  function handleSearch(value){
    setSearchItem(value)
  console.log(value)
  
  }
  
  
    return (
      <div className="searchInput">
        <input  onChange={(e)=>{
          handleSearch(e.target.value)
          search(searchItem)
        }} className="search"
          type="text"
          placeholder="Search your Movie Here..."
          value={searchItem}
        />
       
       </div>
     );
  
  
  
    }
export default MovieSearch;