import React, { useState } from 'react'
import axios from 'axios';
import MealCard from './MealCard';

const MainPage = () => {
    const [data, setData] = useState();
    const [search, setSearch] = useState("");
    const[msg, setMsg] = useState("")


    const handleInput =(event) => {
        setSearch(event.target.value)
    }



    const myFun = async () => {
        console.log("hi");
        
        if(search== ""){
            setMsg("Please Enter something")
        }else{
        const get = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
        // const jsonData = await get.json()
        // console.log(jsonData.meals);
        // setData(jsonData.meals)
        console.log(get);
        setData(get.data.meals)
        setMsg("")
        }  
    }
    
    // console.log(data);
  return (
    <>
        <h1 className='head'>FOOD RECIPE APP</h1>
        <div className='container'>
            <div className='searchBar'>
            <input type="text" placeholder='Enter Dishes' onChange={handleInput} />
            <button onClick={myFun}>Search</button>  
            </div>
            <h4 className='error'>{msg}</h4>
            <div>
                <MealCard detail ={data}/>
            </div>
        </div>
    </>
  )
}

export default MainPage