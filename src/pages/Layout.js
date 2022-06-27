import {Outlet, Link} from 'react-router-dom';
import Logo from '../static/image/logo.png';
import './App.css';
import { FaMapMarkedAlt,FaPhone, FaEnvelopeOpen, FaFacebookF, FaInstagram, FaYoutube, FaTelegramPlane,FaWhatsapp, FaMobileAlt } from 'react-icons/fa';
const Layout = () => {
	return(
	<>
	<nav className="navbar navbar-expand-sm bg-light navbar-light">
  <div className="container-fluid">
	<Link to="/" className="navbar-brand"><img src={Logo} width="130px" />Green Field Public School</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar" style={{justifyContent:"center"}}>
      <ul className="navbar-nav navbar-right">
		<li className="nav-item dropdown">
    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#">About</a>
    <ul className="dropdown-menu">
      <li><Link to="/about" className="dropdown-item">About School</Link></li>
      <li><Link to="/mission" className="dropdown-item">Mission & Vision</Link></li>
    </ul>
  </li>
  
  <li className="nav-item dropdown">
    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#">Facilities</a>
    <ul className="dropdown-menu">
		<li><Link to="/facilities/infrastructure" className="dropdown-item">Infrastructure</Link></li>
      <li><Link to="/facilities/security" className="dropdown-item">CCTV Surveillance</Link></li>
	  
      <li><Link to="/facilities/transportation" className="dropdown-item">Transportation</Link></li>
	  <li><Link to="/facilities/sports" className="dropdown-item">Sports & Activity</Link></li>
	  <li><Link to="/facilities/smartclass" className="dropdown-item">Smart Class & IT Class</Link></li>
    </ul>
  </li>
  
  <li className="nav-item dropdown">
    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#">Team</a>
    <ul className="dropdown-menu">
      <li><Link to="/director" className="dropdown-item">Director</Link></li>
      <li><Link to="/principal" className="dropdown-item">Principal</Link></li>
	  <li><Link to="/team" className="dropdown-item">Our Team</Link></li>
    </ul>
  </li>
  <li className="nav-item">
			<Link to="/gallery" className="nav-link">Gallery</Link>
        </li>
        <li className="nav-item">
			<Link to="/contact" className="nav-link">Contact Us</Link>
        </li>
		<li className="nav-item">
			<a href="tel:+91 99996 84557" className="nav-link"><button className="btn btn-success navbar-btn"><FaMobileAlt/> Call</button></a>
        </li>    
		<li className="nav-item">
			<a href="https://api.whatsapp.com/send?phone=+919999684557&text=I%20want%20to%20know%20about%20Admission" className="nav-link"><button className="btn btn-danger navbar-btn" style={{backgroundColor:"#25D366", borderColor:"#25D366"}}><FaWhatsapp/></button></a>
        </li>    
      </ul>
    </div>
  </div>
</nav>
<Outlet/>

<footer className="footer-section">
        <div className="container">
            <div className="footer-cta pt-5 pb-5">
                <div className="row">
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <i><FaMapMarkedAlt/></i>
                            <div className="cta-text">
                                <h4>Find us</h4>
                                <span>Basai Enclave, Gurugram, Haryana</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <i><FaPhone/></i>
                            <div className="cta-text">
								<h4>Call us</h4>
                                <span>+91 99996 84557</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <i><FaEnvelopeOpen/></i>
                            <div className="cta-text">
                                <h4>Mail us</h4>
                                <span>gfpsprincipal@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-content pt-5 pb-5">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 mb-50">
                        <div className="footer-widget">
                            <div className="footer-logo">
                                <a href="index.html"><img src={Logo} className="img-fluid" alt="logo"/></a>
                            </div>
                            <div className="footer-text">
                                <p>Green Field Public School is one of the best CBSE School in Basai Enclave Gurgaon. At Green Field Public School, the uniqueness of each child is recognised, nurtured and treasured emphasis is on LEARNING and not on Teaching.</p>
                            </div>
                            <div className="footer-social-icon">
                                <span>Follow us</span>
                                <a href="https://www.facebook.com/greenfield.sch.7/" className="facebook-bg"><FaFacebookF/></a>
                                <a href="https://www.instagram.com/gfpsggn/" className="instagram-bg"><FaInstagram/></a>
                                <a href="https://www.youtube.com/watch?v=a5FtLSRg9HE" className="youtube-bg"><FaYoutube/></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div className="footer-widget">
                            <div className="footer-widget-heading">
                                <h3>Useful Links</h3>
                            </div>
                            <ul>
                                <li><a href="/">Home</a></li>
								<li><Link to="/gallery">Gallery</Link></li>
								<li><Link to="/about">About School</Link></li>
								<li><Link to="/facilities/infrastructure">Infrastructure</Link></li>
								<li><Link to="/team">Our Team</Link></li>
                                <li><a href="/contact">Contact</a></li>
								<li>
			<a href="tel:+91 99996 84557"><FaMobileAlt/> Call</a>
        </li>    
		<li>
			<a href="https://api.whatsapp.com/send?phone=+919999684557&text=I%20want%20to%20know%20about%20Admission"><FaWhatsapp/>WhatsApp</a>
        </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                        <div className="footer-widget">
                            <div className="footer-widget-heading">
                                <h3>Subscribe</h3>
                            </div>
                            <div className="footer-text mb-25">
                                <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                            </div>
                            <div className="subscribe-form">
                                <form action="https://www.sachinthakur.in">
                                    <input type="text" disabled placeholder="Email Address"/>
                                    <button><i><FaTelegramPlane/></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyright-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                        <div className="copyright-text">
                            <p>Copyright &copy; 2022, All Right Reserved</p>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 text-center">
                        <div className="footer-menu">
                            <ul>
                                <li> <a href="https://www.sachinthakur.in/">Designed by Sachin Arayans</a></li>
                                <li><a href="tel:9810932480">+91 9810932480</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
	</>
	);
}
export default Layout;	