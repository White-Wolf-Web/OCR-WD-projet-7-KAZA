import React, { useState, useRef, useEffect } from "react";// j'importe useState UseRef et useEffect
import "./Dropdown.css";                          // j'importe mon fichier css
import ArrowDown from "../ASSETS/arrow-up.png";            // j'importe ma "fleche" 

export default function Dropdown(props) {                      
	const [toggle, setToogle] = useState(false);           //
	const [heightEl, setHeightEl] = useState();            //

	const toggleState = () => {                            //
		setToogle(!toggle);                                //
	};
	const refHeight = useRef();                            //

	useEffect(() => {                                                //
		setHeightEl(`${refHeight.current.scrollHeight}px`);     //
	}, []);                                                          // je rajoute [] vide à useEffect ce qui permet qu'il ne s'execute qu'une seule fois

	return (                                                         //
		<div className="large-Dropdown">
			<div onClick={toggleState} className="large-Dropdown-visible">     
				<h3>{props.title}</h3>
				<img                                                 //
					src={ArrowDown}
					alt="fleche descendante"
					className={toggle ? "large-Dropdown-visible img" : "large-Dropdown-visible img dropdown-arrow-animated" }     
				/>   
			</div> 

			<div 
				ref={refHeight}
				className={
					toggle ? "large-Dropdown-toggle dropdown-animated" : "large-Dropdown-toggle"
				}
                style={{height:toggle ? `${heightEl}` : "0px"}}
			>
				<div className="large-Dropdown-toggle-p" aria-hidden={toggle ? "true" : "false"}>{props.content}
				</div>
			</div>
		</div>
	);
}
