import CCTV from '../static/image/cctv.jpg';
const Contact = ()=>{
	return(
		<>
			<div className="container text-center p-4 text-white" style={{background:"#3c297c"}}>
				<h1><b>Security and CCTV</b></h1>
			</div>
			<br/><br/>
			<div className="container">
				<div className="row">
				<div className="col-sm-6">
					<img src={CCTV} width="90%" />
				</div>
				<div className="col-sm-6">
				<p>All Campus and Classes are Under CCTV Surveillance. Our Teachers and Staff are highly active for Security of Students.</p>
				</div>
				</div>
			</div>
		</>
	);
} 
export default Contact;