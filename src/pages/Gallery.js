import YellowBg from '../static/image/yellow-bg.jpg';
import Gallery1 from '../static/image/gallery1.jpg';
import Gallery2 from '../static/image/gallery2.jpg';

import Gallery3 from '../static/image/gallery3.jpg';
import Gallery4 from '../static/image/gallery4.jpg';
import Gallery5 from '../static/image/gallery5.jpg';
import Gallery6 from '../static/image/gallery6.jpg';
import Gallery7 from '../static/image/gallery7.jpg';
import Gallery8 from '../static/image/gallery8.jpg';
import Gallery9 from '../static/image/gallery9.jpg';
import Gallery10 from '../static/image/gallery10.jpg';
import Gallery11 from '../static/image/gallery11.jpg';
import Gallery12 from '../static/image/gallery12.jpg';
const Contact = ()=>{
	return(
		<>
			<div className="container text-center p-4 text-white" style={{background:"#3c297c"}}>
				<h1><b>Gallery</b></h1>
			</div>
			<br/><br/>
				<div className="yellow-bg" style={{background:'url("'+YellowBg+'")'}}>
			<div className="container" style={{paddingTop:"50px",paddingBottom:"50px",textAlign:"center"}}>
				<h1 style={{paddingTop:"60px",paddingBottom:"0px"}}>Gallery</h1>
				<span style={{backgroundColor:"#fff",display:"inline-block",width:"50px",height:"5px",marginBottom:"50px"}}> </span>
				<div className="row">
					<div className="col-sm-3"><img className="img-thumbnail" src={Gallery1} width="100%" /></div>
					<div className="col-sm-3"><img className="img-thumbnail" src={Gallery2} width="100%" /></div>
					<div className="col-sm-3"><img className="img-thumbnail" src={Gallery3} width="100%" /></div>
					<div className="col-sm-3"><img className="img-thumbnail" src={Gallery4}  width="100%"/></div>
					
					<div className="col-sm-3"><img className="img-thumbnail" src={Gallery5} width="100%" /></div>
					<div className="col-sm-3"><img className="img-thumbnail" src={Gallery6} width="100%" /></div>
					<div className="col-sm-3"><img className="img-thumbnail" src={Gallery7} width="100%" /></div>
					<div className="col-sm-3"><img className="img-thumbnail" src={Gallery8}  width="100%"/></div>
					
					<div className="col-sm-3"><img className="img-thumbnail" src={Gallery9} width="100%" /></div>
					<div className="col-sm-3"><img className="img-thumbnail" src={Gallery10} width="100%" /></div>
					<div className="col-sm-3"><img className="img-thumbnail" src={Gallery11} width="100%" /></div>
					<div className="col-sm-3"><img className="img-thumbnail" src={Gallery12}  width="100%"/></div>
				</div>
			</div></div>
		</>
	);
} 
export default Contact;