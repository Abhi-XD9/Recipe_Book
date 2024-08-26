import React, { useEffect, useState } from 'react'
import Mealcards from './Mealcards'
import { Route } from 'react-router-dom'

const Mainpage = () => {

    const[search,setsearch]=useState("")
    const[recipes, setrecipes] = useState([])

        const myFun = async()=>{
          if(search == ""){
            alert("Please enter a Dish Name you Want")
          }else{
            const data= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
            const response = await data.json()
            setrecipes(response.meals)
          }
            const data= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
            const response = await data.json()
            setrecipes(response.meals)
        }
const submitHandler=(e)=>{
    e.preventDefault();
}

const handleSearchChange=(e)=>{
    
        setsearch(e.target.value)
 
}

  return (
    <div>
    <div className='navbar'>
      <h1 className='heading'>RECIPE APP</h1>
      <form onSubmit={submitHandler}>
        <input id='search_bar' type="text" value={search}  placeholder="Search for a recipe..." onChange={handleSearchChange}/>
        <input id='search_btn' type="submit" value="search" onClick={myFun} />
      </form>
    </div>
<div>
<Mealcards  recipes={recipes}/>
</div>
  </div>
  )
}

export default Mainpage
