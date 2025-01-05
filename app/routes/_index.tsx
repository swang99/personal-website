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
				I'm an incoming associate technical consultant at Appian with diverse technical interests. I am excited to bring applications to life using my knowledge in machine learning, data analytics, and full-stack web development. 
				
				In 2024, I graduated from Dartmouth College with a double major in Computer Science and Economics. During my free time, I might be learning a new piece on the piano, taking photos of stunning sunsets, skiing in on the Ice Coast, or striving someday to hit tennis balls at 0.1% the level of my commencement speaker. 

				Feel free to reach me at swang.2420@gmail.com, I'm always open to chat about new opportunities!
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
