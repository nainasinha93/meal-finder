import React,{useState} from "react"
import Food from './Food';


function Search (){
    const [inputValue,setInputValue]=useState('curry')
    const [data,setData]=useState(null);
    const searchMeal=()=>{

     const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`;

        fetch(url).then(response => response.json())
        .then((d) => {
            console.log(d.meals)
            if(d.meals==null){
                setData(null)
                alert("No any dish available for "+ inputValue)
            }
            else
            setData(d)}).catch((r)=>{ 
            setData(null)
            console.log("No dish available"+r)})

    }


    return(
        <div className="main-div">
           <h2 className="header">Meal Finder</h2> 
            <input className="se m-4"  placeholder="Search for a meals or keywords"  onChange={(e)=>{setInputValue(e.target.value)}}/>
            <button className="btn btn-success" onClick={()=>{searchMeal()}}>Search</button>
            <div className ="om">
              {data?<Food s={data}/>:null}  
            
                
                 
            </div>
        </div>
    )
}

export default Search