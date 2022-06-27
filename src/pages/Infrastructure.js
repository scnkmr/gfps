import Infra1 from '../static/image/infra1.jpg';
import Infra3 from '../static/image/infra3.jpg';
import Infra2 from '../static/image/infra2.jpg';
const Contact = ()=>{
	return(
		<>
			<div className="container text-center p-4 text-white" style={{background:"#3c297c"}}>
				<h1><b>Infrastructure</b></h1>
			</div>
			<br/><br/>
			<div className="container">
				<div className="row">
				<div className="col-sm-6">
					<img src={Infra1} width="90%" />
					<img src={Infra2} width="90%" />
					<img src={Infra3} width="90%" />
				</div>
				<div className="col-sm-6">
				<ul>
					<li>Airy, spacious & well ventilated class rooms and a beautifully conceived and developed Kinder Garten - to aid the learning process in every way - through Play way methods of teaching, group activity, & aesthetic class environment.</li>
					<li>
					A children's park fully equipped with swings and a complete slide and climb unit is there for children to relax & have fun time. Splash pools for recreational purpose.
					</li>
					<li>
					ll these and more with an excellent & qualified team of teachers with adequate support staff provides the management of this nurturing wing.
					</li>
					<li>
					Exposure to Multimedia to enhance learning inputs are encouraged in groups and stress-free environment, enabling a conducive peer group interaction.
					</li>
					<li>
					Activities that generate a spirit of cooperation; spirit of enquiry; healthy competition & skill enhancement, are encouraged. Summer or other vacations are utilized for "camps" to enhance life skills & learning.
					</li>
					<li>
					Integrated learning system to effectively reinforce concepts (developed as per in house research).
					</li>
				</ul>
				<br/>
				<h3>Activity Room</h3>
				<p>Green Field Public School established as Taposthali School in 2004 has always been known for its vibrant cultural activities which not only fulfill the aesthetic and creative urge of the students, but also promote a positive self concept and sense of achievement through participation and stage exposure.</p>
				<ul>
					<li>Music, art craft, dance, painting theatre are just some of the activitites undertaken at the school.</li>
					<li>Through varied activities like celebration of festivals, special assembles etc. the school aims at not only identifying and polishing talent, but also, familiarizing the students with rich cultural legacy that always must be cherished.</li>
				</ul>
				</div>
				</div>
			</div>
		</>
	);
} 
export default Contact;