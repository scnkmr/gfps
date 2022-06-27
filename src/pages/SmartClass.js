import Clab from '../static/image/clab.jpeg';
const Contact = ()=>{
	return(
		<>
			<div className="container text-center p-4 text-white" style={{background:"#3c297c"}}>
				<h1><b>Smart Class & Computer(IT) Class</b></h1>
			</div>
			<br/><br/>
			<div className="container">
				<div className="row">
				<div className="col-sm-6">
					<img src={Clab} width="90%" />
				</div>
				<div className="col-sm-6">
				<p>The School's IT Center contains separate PC research facilities for junior and senior classes. This Center gives priceless abilities and information fundamental for understudies to get a handle on the subtleties of Information Technology. It guarantees that our understudies are exceptional with innovative information and incites them to be at their inventive best. The Senior Computer Laboratory is likewise prepared for high velocity web association, consequently allowing top notch Internet riding experience under oversight.</p><p>

Software engineering is obligatory from Classes I to X. It is presented as an elective subject at +2 phases. The IT Center gives extremely valuable experience to understudies in organized strategies for guidance/learning and gives the best of programming accessible in the exceptionally serious world we live in. The I.T. Focus additionally houses the School servers and is effectively used to keep up with understudies' scholar and co-curricular records and any remaining aspects of school organization, which is generally computerized. It additionally includes a Teacher Resource focus with Desktop PCs, to enable instructors and to assist them with planning for their classes better.</p>
				</div>
				</div>
			</div>
		</>
	);
} 
export default Contact;