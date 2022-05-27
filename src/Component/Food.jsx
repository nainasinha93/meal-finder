import React,{useEffect,useState} from "react"
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import img from "../Image/images.png"
import '../Component/Food.css'
import Showpop from "./Showpop";

function Food(props){
  //  let imgs=[img,img,img,img];
    const [mouseEvenet,setMouseEvent]=useState(false)
    const [showPopup,setShowPopup]=useState("")

useEffect(()=>{
  // console.log(props.s.meals[0].strMealThumb)
})

const showName=(i,a)=>{
 let hover=document.getElementById(i)
 hover.classList.add("hover")
 setShowPopup(i)
 //popup
 let getImage=document.getElementById(i+1);
    getImage.classList.add("imagesrc")
  
}
const removeName=(i,a)=>{
  
    let hover=document.getElementById(i)
    let elem=hover.innerHTML;
   
    hover.classList.remove("hover")
    setShowPopup("")
    // popup
    let getImage=document.getElementById(i+1);
    getImage.classList.remove("imagesrc")
  
}

    return(
        <>
<div className="container">
    <div className="row">
        
    {props.s.meals.map((a,i)=>{
        return(<>
      
        <div key={i} id={a.idMeal} className="col item-col" onMouseEnter={(i)=>{showName(a.idMeal,a)}} onMouseLeave={(i)=>{removeName(a.idMeal,a)}} >
           {/*<Popup  className="position" trigger={<button> Trigger</button>} position="right center"><div>
            <img className="" src={a.strMealThumb} style={{marginBottom:"8px", height:"200px",width:"200px"}}></img>
           </div></Popup> */}
        
        {showPopup===a.idMeal?<div id={a.idMeal+1}  className="position"  style={{color:"black"}}>{a.strMeal}
        
         </div>:null}
        
        <img className="" src={a.strMealThumb} style={{marginBottom:"8px", height:"200px",width:"200px"}}></img>
        </div>

   
        </>)
    })}

    </div>
</div>
</>
    )
}
export default Food

