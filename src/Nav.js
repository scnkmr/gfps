import React from "react";
import {
	BrowserRouter as Router,
	Routes,
	Link,
	Route
	} from "react-router-dom";
import Logo from './static/image/logo.png';

export default function Nav(){
	return(
	<Router>
		<nav className="navbar navbar-light bg-light navbar-expand-sm">
  <Link className="navbar-brand" to="/">
    <img src={Logo}  height="80" alt="logo"/>
    Green Field Public School
  </Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-list-2" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbar-list-2">
    <ul className="navbar-nav">
      <li className="nav-item active">
		<Link to="/" className="nav-link">Home </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">About Us</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/contact">Contact</Link>
      </li>
    </ul>
  </div>
</nav>
	<Routes>
		<Route path="/">
			<Home/>
		</Route>
		<Route path="/about">
			<About/>
		</Route>
		<Route path="/contact">
			<Contact/>
		</Route>
	</Routes>
	</Router>
	);
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Contact() {
  return <h2>Contact</h2>;
}