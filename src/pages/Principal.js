import {Link} from 'react-router-dom';
import Principal from '../static/image/principal.png';
const Contact = ()=>{
	return(
		<>
			<div className="container text-center p-4 text-white" style={{background:"#3c297c"}}>
				<h1><b>Principal's Desk</b></h1>
			</div>
			<br/><br/>
			<div className="container" style={{paddingTop:"100px",paddingBottom:"100px"}}>
			<div className="row">
				<div className="col-sm-6" style={{textAlign:"center"}}>
					<img src={Principal} width="80%" />
				</div>
				<div className="col-sm-6">
					<h6 style={{color:"#2eb9d6",fontWeight:"600"}}>Sarla Mehlawat</h6>
					<h2 style={{color:"#3c297c",fontWeight:"600"}}>Message From Principal</h2>
					<span className="feature-underline"> </span>
						<p>"A school is a building surrounded by four walls with the future inside".
	It'S a social institution that reflects the standard af society. Therefore,
	good schools are needed for a good society to recognize and utilize
	their hidden talents for the tallest possible upliftment and roughness.
	A school plays a greater role in changing society and its people in the
	sphere of academic, social, economic, mental, moral, and physical
	development.
	Above all, it always keeps its door open for all irrespective of the
	castle and called color and community, high and low, rich and poor.
	Hence it may be termed as a pious and sacred social institution. One-
	step ahead, at ignites the young minds and molds the pupils to good
	citizens as well as tha good leaders of the nation.
</p>
					<Link to="/contact"><button className="btn btn-sm" style={{backgroundColor:"#2eb9d6",color:"#fff", borderRadius:"25px", padding:"8px 30px"}}>Enroll Your Child</button></Link>
				</div>
			</div>
		</div>
		</>
	);
} 
export default Contact;