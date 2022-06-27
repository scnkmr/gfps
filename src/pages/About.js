import Image1 from '../static/image/img1.png';
import {Link} from 'react-router-dom';
const Contact = ()=>{
	return(
		<>
			<div className="container text-center p-4 text-white" style={{background:"#3c297c"}}>
				<h1><b>About Us</b></h1>
			</div>
			<br/> <br/>
			<div className="container">
			<div className="row">
				<div className="col-sm-6">
					<h6 style={{color:"#2eb9d6",fontWeight:"600"}}>CBSE Affliated</h6>
					<h1 style={{color:"#3c297c",fontWeight:"600"}}>Welcome to Green Field School</h1>
					<span className="feature-underline"> </span>
					<p><b>Green Field Public School</b> has, since its foundation, acquired for itself a standing for greatness in the field of education-We have all that
makes for a model school — incredible framework, empowering climate, committed workforce of profoundly qualified and experienced
educators, a tremendous scope of center and co-curricular projects, or more all and principal ite</p>
					<Link to="/contact"><button className="btn btn-sm" style={{backgroundColor:"#f9c803",color:"#fff", borderRadius:"25px", padding:"8px 30px"}}>Enroll Your Child</button></Link>
				</div>
				<div className="col-sm-6" style={{textAlign:"center"}}>
					<img src={Image1} width="80%" />
				</div>
			</div>
		</div>
		<br/><br/>
		<div className="container">
			<h2 className="text-center text-decoration-underline">Our Values</h2>
			<h3> Faith</h3>
			<p>In Green Field Public School we hope and believe in the goodness and reliability of a person. We offered as a means by which things will turn out well in the end, can be enjoyed in the present and secured in the future.</p>
			<br/>
			<h3>Trustworthiness</h3>
			<p>We consider it as our moral value to fulfill an assigned responsibility and as an extension of that, not to let down any expectations.</p>
			<br/>
			<h3>Integrity</h3>
			<p>Our Trust believes integrity is a skill you have to teach yourself, because you're not born with it, but it is something that you can make yours. It requires honesty, the ability to follow a moral code, and loyalty to yourself and your beliefs, as for this we all endeavor to achieve.
			</p>
			<br/>
			<h3>Stewardship</h3>
			<p>Students at Green Field Public School are called upon to be stewards of their institute by caring for their fellow students, the institute campus, and the institute's traditions. In ways small and large, students learn to be caretakers of the people and things that make up their environment.</p>
			<br/>
			<h3>Fulfilling our Potential</h3>
			<p>We believe that each one of us carry within us a seed of greatness or a vast potential that is just awaiting to be unearthed and unleashed and the responsibility is on us to discover, unearth and actualizing this that would ultimately bring us true fulfillment as we live a life of destiny.</p>
		</div>
		</>
	);
} 
export default Contact;