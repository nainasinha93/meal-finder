import React,{useEffect,useState} from "react"
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import img from "../Image/images.png"
import '../Component/Food.css'

function Food(props){
  //  let imgs=[img,img,img,img];
    const [mouseEvenet,setMouseEvent]=useState(false)
    const [showPopup,setShowPopup]=useState(false)

useEffect(()=>{
   // console.log(props.s.meals[0].strMealThumb)
})

const showName=(i,a)=>{
 let hover=document.getElementById(i)
 hover.classList.add("hover")
 setShowPopup(true)
 //popup
 let getImage=document.getElementById(i+1);
    getImage.classList.add("imagesrc")
    console.log(getImage)

 //console.log(hover)
}
const removeName=(i,a)=>{
  //  console.log(i)
    let hover=document.getElementById(i)
    let elem=hover.innerHTML;
   // console.log(elem)
    hover.classList.remove("hover")
    setShowPopup(false)
    // popup
    let getImage=document.getElementById(i+1);
    getImage.classList.remove("imagesrc")
    console.log(getImage)
}

    return(
        <>
<div className="container">
    <div className="row">
        
    {props.s.meals.map((a,i)=>{
        return(<>
      
        <div key={i} id={a.idMeal} className="col item-col" onMouseEnter={(i)=>{showName(a.idMeal,a)}} onMouseLeave={(i)=>{removeName(a.idMeal,a)}} >
           {/*<Popup  className="position" trigger={<button> Trigger</button>} position="right center"><div>Popup content here !!</div></Popup> */}
      
           {showPopup?<div id={a.idMeal+1}  className="position"  style={{color:"black"}}> Hi Add pop up here</div>:null}
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

