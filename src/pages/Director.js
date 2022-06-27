import {Link} from 'react-router-dom';
import Director from '../static/image/director.png';
const Contact = ()=>{
	return(
		<>
			<div className="container text-center p-4 text-white" style={{background:"#3c297c"}}>
				<h1><b>Director's Desk</b></h1>
			</div>
			<br/><br/>
			<div className="container">
				<div className="container" style={{paddingTop:"100px",paddingBottom:"100px"}}>
			<div className="row">
				<div className="col-sm-6">
					<h6 style={{color:"#2eb9d6",fontWeight:"600"}}>Surender Mehlawat</h6>
					<h2 style={{color:"#3c297c",fontWeight:"600"}}>Message From Director</h2>
					<span className="feature-underline"> </span>
						<p>

                    "Our mission is to provide positive catalytic impulse to every CHILD to
stretch his inherent learning competencies through a self discovery
process"

At <b>Green Field Public school,</b>the uniqueness of each child is
recognised, nurtured and treasured emphasis is on LEARNING and not
an teaching.
Education is a complete process that leads to the attainment of the
full potential off the childe Our endeavour is to equip our students with
lite-skills to face the real world be it planning, organizing, deciding,
questioning, reasoning analysing, team-building, communicating
effectively or dealing with challenges confidently-
Our focus is to develop our students as global citizens, with tolerance,
respect & appreciation of diverse cultures & religions for a life-
learning experience They should be self-motivated, independent,
confident decision makers to take up a leadership roles in futu re.
                

</p>
					<Link to="/contact"><button className="btn btn-sm" style={{backgroundColor:"#2eb9d6",color:"#fff", borderRadius:"25px", padding:"8px 30px"}}>Enroll Your Child</button></Link>
				</div>
				<div className="col-sm-6" style={{textAlign:"center"}}>
					<img src={Director} width="80%" />
				</div>
			</div>
		</div>
			</div>
		</>
	);
} 
export default Contact;