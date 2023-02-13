//import {useState, useEffect} from 'react';
import "./Home.css"
//import { useParams } from "react-router-dom";
import HouseData from "../ASSETS/HouseData.js"
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="main">

 <div className="banner">
 <div className="filtreSombre"></div>
 <p>Chez vous, partout et ailleurs</p>
</div>


 <div className="gallery">

		{HouseData.map((HouseData) => (
      <Link to={"/logement/" + HouseData.id} key={HouseData.id}>
      
 <div className={["thumb", "filtreGradient "].join(' ')}><div className="HomeImg" style={{backgroundImage:`url(${HouseData.cover})`}}></div><p className='thumb-p'>{HouseData.title}</p></div>
</Link>
))}
 </div>
 

 </div> 
  )
}
