import logo from "./logo.svg";
import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Nav/Navbar";
import RightNavbar from "./components/Nav/RightNav";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";

function App() {
	return (
		<>
			<div className="App" />

			<Navbar />
			<RightNavbar />

			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/about" element={<About />} />
				<Route exact path="/aboutus" element={<AboutUs />} />
				<Route exact path="/faq" element={<Faq />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
