import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from './pages/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Mission from './pages/Mission';
import Infrastructure from './pages/Infrastructure';
import Transportation from './pages/Transportation';
import SmartClass from './pages/SmartClass';
import Sports from './pages/Sports';
import Security from './pages/security';
import Director from './pages/Director';
import Principal from './pages/Principal';
import Team from './pages/Team';
import Gallery from './pages/Gallery';
function App() {
  return (
  <BrowserRouter>
	<Routes>
		<Route path="/" element={<Layout/>}>
			<Route index element={<Home/>}/>
			<Route path="/about" element={<About/>}/>
			<Route path="/mission" element={<Mission/>}/>
			<Route path="/facilities/infrastructure" element={<Infrastructure/>}/>
			<Route path="/facilities/transportation" element={<Transportation/>}/>
			<Route path="/facilities/SmartClass" element={<SmartClass/>}/>
			<Route path="/facilities/sports" element={<Sports/>}/>
			<Route path="/facilities/security" element={<Security/>}/>
			<Route path="/contact" element={<Contact/>}/>
			<Route path="/director" element={<Director/>} />
			<Route path="/principal" element={<Principal/> }/>
			<Route path="/team" element={<Team/>} />
			<Route path="/gallery" element={<Gallery/>} />
		</Route>
	</Routes>
  </BrowserRouter>
  );
}

export default App;
