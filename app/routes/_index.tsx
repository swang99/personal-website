import Footer from '~/components/Footer';
import MainNav from '~/components/MainNav';
import { introData } from '~/data/websiteData';

export default function Index() {
  return (
	<body className="personal-slide">
		<MainNav />
		
		<section className="section-abt">
            <div className="row">
                <div className="abt-img-container">
					<img src="styles/img/Photo/Intro/stephen.jpeg" alt="Stephen Wang"></img>
				</div>
                <h1 className="abt-cap js--wp-1">{introData.photoIntro}</h1>     
            </div>
        </section> 

		<section className="section-bio js--section-bio" id="bio">
            <div className="row">
                <h2><b>About Me</b></h2>
				<div className="bio-paragraph">
				  <p className="long-copy">{introData.indexIntro}</p>
				</div>
				<div className="bio-paragraph">
				<p className="long-copy">
				<b> My Bucket List </b>
				  {introData.bucketList.map((item, index) => (
					<li key={index}>{item}</li>
				  ))}
				</p>
				</div>
            </div>
    	</section>
		
		<Footer />
	</body>
  );
}
