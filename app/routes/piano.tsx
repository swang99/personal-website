import Footer from '~/components/Footer';
import MainNav from '~/components/MainNav';
import Video from '~/components/Video';
import { pianoData } from '~/data/websiteData';

export default function piano() {
  return (
	<body className="personal-slide">
		<MainNav />
		<header className="piano-bg"></header>
		<section className="section-piano-vids js--section-features" id="features">
            <div className="row">
                <h2><b>Listen</b></h2>
				{
				  pianoData.pieces.map((item, index) =>
					<Video key={`piano-pieces-${index}`} title={item.title} vidLink={item.vidLink}/>
				  )
				}
            </div>
    	</section>

		<section className="section-bio js--section-bio" id="bio">
			<div className="row">
				<h2><b>Music Bio</b></h2>
				<div className="bio-paragraph">
				  <p className="long-copy"> 
					<b>{pianoData.bio.highlight}</b> 
					{pianoData.bio.achievements} 
				  </p>
				</div>

				<div className="bio-paragraph">
				  <p className="long-copy"> {pianoData.bio.venues} </p>
				</div>

				<div className="bio-paragraph">
				  <p className="long-copy"> {pianoData.bio.community} </p>
				</div>
			</div>
		</section>
		<Footer />
	</body>
  )
}
