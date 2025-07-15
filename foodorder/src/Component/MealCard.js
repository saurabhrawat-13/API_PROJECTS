import React from 'react'
import { NavLink } from 'react-router-dom'

const MealCard = ({detail}) => {
    console.log(detail);
    
  return (
    <div className='meals'>

    {!detail ? "Data Not Found" : detail.map((curItem)=> {
        return (
         <div>
        <img src={curItem.strMealThumb}/>
        <p>{curItem.strMeal}</p>
        <NavLink to={`/${curItem.idMeal}`}><button>Recipe</button></NavLink>
        
    </div>)
    })

    }
    </div>
  )
}

export default MealCard