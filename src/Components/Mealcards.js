import React from 'react'
import { NavLink } from 'react-router-dom'
import Mealinfo from './Mealinfo'

const Mealcards = ({recipes}) => {
    console.log(recipes)
  return (
    <div className='meals'>
     {!recipes ? "":recipes.map((currItem)=>{
        return(
            <div key={currItem.idMeal} className='recipe_card'>
                <img src={currItem.strMealThumb} alt="Image of Recipe." />
                <p>{currItem.strMeal}</p>
                <NavLink to={`/${currItem.idMeal}`}><button className='rcp_btn'>Recipe</button></NavLink>
            </div>
        )
     })
     }
    </div>
  )
}

export default Mealcards
