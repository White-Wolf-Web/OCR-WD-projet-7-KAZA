import "./App.css";

import { Routes, Route } from "react-router-dom";
import Home from "../HOME/Home";
import About from "../ABOUT/About";
import NotFound from "../404/NotFound";
import Location from "../LOCATION/Location";
import Header from "../HEADER/Header.js";
import Footer from "../FOOTER/Footer.js";
import Accordeon from "../DROPDOWN/Dropdown-Mini";
import SlideShow from "../SLIDESHOW/SlideShow";
import StarRating from "../STAR-RATING/StarRating";


function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="*" element={<NotFound />} />
				<Route path="/logement/:id" element={<Location />} />
        <Route path="/acc" element={<Accordeon />} />
		<Route path="/ss" element={<SlideShow />} />
		<Route path="/rating" element={<StarRating />} />
	
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
