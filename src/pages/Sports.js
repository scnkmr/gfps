import Sports from '../static/image/sports.jpg';
const Contact = ()=>{
	return(
		<>
			<div className="container text-center p-4 text-white" style={{background:"#3c297c"}}>
				<h1><b>Sports & Activity</b></h1>
			</div>
			<br/><br/>
			<div className="container">
				<div className="row">
				<div className="col-sm-6">
					<img src={Sports} width="90%" />
				</div>
				<div className="col-sm-6">
				<p>Green Field Public School is synonymous with the term holistic development. The school emphasizes on a balanced all round development of our children. Sports occupies a pride of place in our school curriculum. Apart from the regular activities pertaining to Physical Training that are incorporated into the time table, proficiency in games like Table Tennis, Basket Ball, Cricket and Kho-Kho are also encouraged.</p>
				</div>
				</div>
			</div>
		</>
	);
} 
export default Contact;