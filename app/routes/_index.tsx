import { Link } from '@remix-run/react';
import Footer from '~/components/Footer';
import MainNav from '~/components/MainNav';

export default function Index() {
  return (
	<body className="personal-slide">
		<MainNav />
		
		<section className="section-abt">
            <div className="row">
                <ul className="abt-showcase clearfix">    
                    <li>
                        <Link className="abt-photo abtSlides js--wp-1" to="/" >
                            <p className="abt-img-container">
								<img src="styles/img/Photo/Intro/SWIt'sMeRDim.png" alt="SW Me"></img>
							</p> 
                            <h1 className= "abt-cap js--wp-1">Hi, I'm Stephen!</h1>
                        </Link>
                    </li>
                    {/*<li>
                        <Link className="abt-photo abtSlides js--wp-1" to="/piano" > 
                            <p className="abt-img-container">
								<img src="styles/img/Photo/Intro/SW2020PianoR.png" alt="SW Piano"></img>
							</p>
                            <h1 className= "abt-cap js--wp-1">Pianist</h1>
                        </Link>
                    </li> 
                    <li>
                        <Link className="abt-photo abtSlides js--wp-1" to="/cs" > 
                            <p className="abt-img-container">
								<img src="styles/img/Photo/Intro/SW2020CSR.png" alt="SW CS"></img>
							</p>
                            <h1 className= "abt-cap js--wp-1">Coder</h1>
                        </Link>
                    </li>    
                    <li>
                        <Link className="abt-photo abtSlides js--wp-1" to="/photography" > 
                            <p className="abt-img-container">
								<img src="styles/img/Photo/Intro/SW2020PhotoR.png" alt="SW Photography"></img>
							</p>
                            <h1 className= "abt-cap js--wp-1">Photographer</h1>
                        </Link>
  					</li> */}        
                </ul>
            </div>
        </section> 

		<section className="section-bio js--section-bio" id="bio">
            <div className="row">
                <h2><b>About Me</b></h2>
                
				<div className="bio-paragraph">
				<p className="long-copy">
                I'm a rising senior at Dartmouth College pursuing a Computer Science and Economics double major. Outside of class, I'm a teaching assistant for the Computer Science department, a portfolio monitor for the Dartmouth Investment and Philanthropy Program, and a member of the Cybersecurity Society. In my free time, I enjoy playing the piano, photography, tennis, and skiing. 
				</p>
				</div>
				
				<div className="bio-paragraph">
				<p className="long-copy">
				<b> My Bucket List: </b>
					<li> See Wimbledon or the French Open in person </li>
					<li> Go on a skiing trip in the Alps </li>
					<li> Learn how to dance beyond the Just Dance games on my Xbox </li>
				</p>
				</div>
            </div>
    	</section>
		
		<Footer />
	</body>
  );
}
