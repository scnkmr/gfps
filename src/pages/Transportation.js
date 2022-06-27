import Trans1 from '../static/image/trans1.jpg';
const Contact = ()=>{
	return(
		<>
			<div className="container text-center p-4 text-white" style={{background:"#3c297c"}}>
				<h1><b>Transportation</b></h1>
			</div>
			<br/><br/>
			<div className="container">
				<div className="row">
				<div className="col-sm-6">
					<img src={Trans1} width="90%" />
				</div>
				<div className="col-sm-6">
				<ul>
				<li>
				Motorized modes of transportation such as scooters and motor cycles are strictly prohibited keeping child’s safety as well as the illegality involved in permitting an underage child to use these means.</li>
<li>Students can avail of the school transport subject to availability of seats.</li>
<li>Students availing the transport arrangement are required to obtain a Bus Pass from the school office on payment of stipulated bus fees. Students must carry the pass daily for inspection by the school authorities/bus conductors.</li>
<li>The school does not entertain any request for change in bus-route to suit an individual’s convenience at the cost of time and distance. Parents are requested to study the specified routes and opt for the one which suits them the best.</li>
<li>Change of Bus Stop for a day or a week is not entertained. As a rule such request should not be made.</li>
				</ul>
		
				</div>
				</div>
			</div>
		</>
	);
} 
export default Contact;