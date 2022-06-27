import {Link} from 'react-router-dom';
import Staff1 from '../static/image/Avantika Chaurasiya.jpg';
import Staff2 from '../static/image/Anita Singh.jpg';
import Staff3 from '../static/image/Priya Gautam.jpg';
import Staff4 from '../static/image/Sushma Sharma.jpeg';
import Staff5 from '../static/image/Priyanka Sirohi.jpg';
import Staff6 from '../static/image/staff6.jpeg';
import Staff7 from '../static/image/staff7.jpeg';
import Staff8 from '../static/image/Geeta Baghel.jpeg';
const Contact = ()=>{
	return(
		<>
			<div className="container text-center p-4 text-white" style={{background:"#3c297c"}}>
				<h1><b>Our Team</b></h1>
			</div>
			<br/><br/>
<div className="container" style={{paddingTop:"50px",paddingBottom:"50px",textAlign:"center"}}>
				<h1 style={{paddingTop:"60px",paddingBottom:"0px"}}>Our Staff</h1>
				<span style={{backgroundColor:"#808080",display:"inline-block",width:"50px",height:"5px",marginBottom:"50px"}}> </span>
				<div className="row staff">
					<div className="col-sm-3"><img className="img-thumbnail" src={Staff1} width="100%" /> <span>Avantika Chaurasiya</span> </div>
					<div className="col-sm-3"><img className="img-thumbnail" src={Staff2} width="100%" /><span>Anita Singh</span></div>
					<div className="col-sm-3"><img className="img-thumbnail" src={Staff3} width="100%" /><span>Priya Gautam</span></div>
					<div className="col-sm-3"><img className="img-thumbnail" src={Staff4}  width="100%"/><span>Sushma Sharma</span></div>
					
					
					<div className="col-sm-3"><img className="img-thumbnail" src={Staff5} width="100%" /> <span>Priyanka Sirohi</span> </div>
					<div className="col-sm-3"><img className="img-thumbnail" src={Staff6} width="100%" /><span>Shobha Prajapati</span></div>
					<div className="col-sm-3"><img className="img-thumbnail" src={Staff7} width="100%" /><span>Heera</span></div>
					<div className="col-sm-3"><img className="img-thumbnail" src={Staff8}  width="100%"/><span>Geeta Baghel</span></div>
				</div>
			</div>
		</>
	);
} 
export default Contact;