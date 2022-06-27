import { FaBeer } from 'react-icons/fa';
import {Link} from 'react-router-dom';
import Slider1 from '../static/image/slider1.jpg';
import FeatureIcon1 from '../static/image/icon-1.png';
import FeatureIcon2 from '../static/image/icon-2.png';
import FeatureIcon3 from '../static/image/icon-3.png';
import FeatureIcon4 from '../static/image/icon-4.png';
import FeatureIcon5 from '../static/image/icon-5.png';
import FeatureIcon6 from '../static/image/icon-6.png';
import Image1 from '../static/image/img1.png';
import Image3 from '../static/image/img3.jpg';
import VisionImg from '../static/image/visionimg.jpg';
import Principal from '../static/image/principal.png';
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

import CardImg from '../static/image/card-img.jpg';
import Director from '../static/image/director.png';
import Staff1 from '../static/image/Avantika Chaurasiya.jpg';
import Staff2 from '../static/image/Anita Singh.jpg';
import Staff3 from '../static/image/Priya Gautam.jpg';
import Staff4 from '../static/image/Sushma Sharma.jpeg';
import Staff5 from '../static/image/Priyanka Sirohi.jpg';
import Staff6 from '../static/image/staff6.jpeg';
import Staff7 from '../static/image/staff7.jpeg';
import Staff8 from '../static/image/Geeta Baghel.jpeg';
import footer from '../static/image/footer.png';
const Home = () => {
	return(
	<>
<Link to="/contact"> <img src={Slider1} width={'100%'} height={'80%'}/> </Link>
		<div className="container feature-cards" style={{marginBottom:"100px",marginTop:"50px"}}>
			<div className="row">
				<div className="col-sm-4">
					<div className="card" style={{width:"400px"}}>
					  <img className="card-img-top" src={FeatureIcon1} alt="Expert Teacher" />
					  <img className="card-img-top" src={FeatureIcon2} alt="Expert Teacher Light" />
					  <div className="card-body">
						<h6 className="card-title">Expert Teachers</h6>
					  </div>
					</div>
				</div>
				<div className="col-sm-4">
					<div className="card" style={{width:"400px"}}>
					  <img className="card-img-top" src={FeatureIcon3} alt="Expert Teacher" />
					  <img className="card-img-top" src={FeatureIcon4} alt="Expert Teacher Light" />
					  <div className="card-body">
						<h6 className="card-title">Fully Equiped</h6>
					  </div>
					</div>
				</div>
				<div className="col-sm-4">
					<div className="card" style={{width:"400px"}}>
					  <img className="card-img-top" src={FeatureIcon5} alt="Expert Teacher" />
					  <img className="card-img-top" src={FeatureIcon6} alt="Expert Teacher Light" />
					  <div className="card-body">
						<h6 className="card-title">Fulfill With Love</h6>
					  </div>
					</div>
				</div>
			</div>
		</div>
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
			</div>
		</div>
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

		
		<div style={{background:'url("'+VisionImg+'")',height:"700px",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center"}}>
		</div>
		
		<div className="container" style={{textAlign:"center",fontColor:"#fff"}}>
				<div className="p-5 text-white rounded" style={{marginTop:"-200px",backgroundColor:"rgb(46, 185, 214)"}}>
					<h6 style={{fontWeight:"600"}}>Session 2022-23</h6>
					<h2 style={{fontWeight:"600"}}>Admission Open</h2>
					<center><span className="feature-underline" style={{backgroundColor:"#fff"}}> </span></center>
					<p>Green Field Public School Gurgaon admissions begin in January every year. Admission to most of the classes is entrance-based. However, the School also offers a provision of direct admission under several programmes. Green Field Gurgaon is currently accepting applications for all the classes for 2022. Candidates can register online by visiting the official website of the School.
					</p>
				</div>
			</div>
			
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
		
			<div className="container" style={{fontColor:"#808080"}}>
				<div className="p-5 rounded" style={{marginTop:"100px",backgroundColor:"rgb(46, 185, 214)",background:'url("'+CardImg+'")', backgroundRepeat:"no-repeat", backgroundPosition:"center", backgroundSize:"cover",paddingRight:"500px"}}>
				<div className="row">
					<div className="col-sm-6">
						<h1 style={{color:"#3c297c",fontWeight:"600"}}>Explore Learn Grow</h1>
						<span className="feature-underline"> </span>
						<p>Green Field Public School Gurgaon admissions begin in January every year. Admission to most of the classes is entrance-based. However, the School also offers a provision of direct admission under several programmes. Green Field Gurgaon is currently accepting applications for all the classes for 2022. Candidates can register online by visiting the official website of the School.
						</p>
					</div>
					<div className="col-sm-6">
				</div>
					
				</div>
			</div></div>
			<div style={{marginTop:"100px"}}>
				<img src={footer} width="100%"/>
			</div>
	</>
	);
}
export default Home;