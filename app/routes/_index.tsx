import Footer from '~/components/Footer';
import MainNav from '~/components/MainNav';

export default function Index() {
  return (
	<body className="personal-slide">
		<MainNav />
		
		<section className="section-abt">
            <div className="row">
                <div className="abt-img-container">
					<img src="styles/img/Photo/Intro/stephen.jpeg" alt="Stephen Wang"></img>
				</div>
                <h1 className="abt-cap js--wp-1">Hi, I'm Stephen!</h1>     
            </div>
        </section> 

		<section className="section-bio js--section-bio" id="bio">
            <div className="row">
                <h2><b>About Me</b></h2>
                
				<div className="bio-paragraph">
				<p className="long-copy">
                I'm a recent graduate of Dartmouth College with majors in Computer Science and Economics. Currently, I am seeking roles in Software Engineering (bonus for a focus in ML) and Data Engineering. Feel free to reach me at <b>swang.2420@gmail.com</b>. Outside of class in college, I was a teaching assistant for the Computer Science department, a portfolio monitor for the Dartmouth Investment and Philanthropy Program, and played chamber music. In my free time, I enjoy playing the piano, taking photos of stunning sunsets, ripping one-handed backhands in tennis, and skiing in the toughest of conditions on the Ice Coast.
				</p>
				</div>
				
				<div className="bio-paragraph">
				<p className="long-copy">
				<b> My Bucket List </b>
					<li> See Wimbledon or the French Open in person </li>
					<li> Go on a skiing trip in the Alps </li>
					<li> Learn all of Chopin's 4 Ballades and 24 Etudes. I'm getting there :) </li>
				</p>
				</div>
            </div>
    	</section>
		
		<Footer />
	</body>
  );
}
