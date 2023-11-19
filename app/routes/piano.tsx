import { Link } from '@remix-run/react';
import Footer from '~/components/Footer';
import MainNav from '~/components/MainNav';
import Video from '~/components/Video';

export default function piano() {
  return (
	<body className="personal-slide">
		<MainNav />
		<header className="piano-bg"></header>

		<section className="section-piano-vids js--section-features" id="features">
            <div className="row">
                <h2><b>Listen</b></h2>
				<Video title="Ballade No. 3 in A-Flat Major, Op. 47 - Chopin"
				       vidLink="https://www.youtube.com/embed/zrW9H_q8lVM"/>

				<Video title="Piano Sonata No. 21, Op. 53 'Waldstein' - Beethoven"
				       vidLink="https://www.youtube.com/embed/YqGmNKT7LvY"/>
				
				<Video title="La Campanella - Liszt"
				       vidLink="https://www.youtube.com/embed/BztamZSvGhQ"/>
				
				<Video title="Rondo in A-Minor, Op.59 - Kabalevsky"
				       vidLink="https://www.youtube.com/embed/HTclVGjA0YA"/>
            </div>
    	</section>

		<section className="section-bio js--section-bio" id="bio">
			<div className="row">
				<h2><b>Music Bio</b></h2>
				<div className="bio-paragraph">
				<p className="long-copy">
				<b>Stephen Wang</b> started studying piano at age 6 under Shuefan Cheng and Evelyn Zuckerman, and has been a student of Mila Filatova since age 8. Stephen has been a prizewinner of international, division, and state competitions since age 9. He claimed 3rd place at the 10th Chopin International Piano Competition in Hartford, CT among 76 competitors representing 14 countries. He received 1st place at the New England Piano Teachers' Association Ruth Davidson Competition (for 9-10th grade), and 1st place at the Alice Hamlet Senior Scholarship Competition (for 11-12th grade) with the Margaret C. Bachelder Romantic Music Award. He awarded 1st place in the junior division and 2nd  place in the senior division of the Steinway Society Piano Competition for New England. From 2015 to 2019, Stephen has won five consecutive 1st places at the state level in the Music Teacher National Association piano performance competition, and was awarded 2nd place in the Eastern Division piano performance competition, where he competed against champions from 12 other contesting states. Stephen has also been a consecutive 1st place winner of the Granite State Piano Competition since 2011.  
				</p>
				</div>

				<div className="bio-paragraph">
				<p className="long-copy">
				Stephen has participated in prestigious music festivals including the Music Fest Perugia in Italy, the Walnut Hill Music Festival in Boston, and the International Keyboard Institute and Festival in New York City. At age 10, Stephen was invited to Italy to play Bach's Piano Concerto in F Minor with the Parlarte Symphonic Orchestra. Since then, he has played Haydn's Piano Concerto in D Major, Mozart's Piano Concerto in G Major, and Beethoven's Concerto in C Minor with the Chamber Orchestra of Boston, the Nashua Chamber Orchestra, and the Sempre Musick Orchestra. Stephen enjoyed his appearances in unique venues such as Carnegie Hall, Boston Symphony Hall, Boston Conservatory, Mount Washington Resort, Dartmouth College Hopkins Center for the Arts, Dartmouth Hitchcock Medical Center, and Vermont Chandler Music Hall.
				</p>
				</div>

				<div className="bio-paragraph">
				<p className="long-copy">
				Stephen's love of music expands to chamber music and composition as well. His successful maiden work earned him 2nd place at the 2019 Granite State Composition Competition. In 10th grade, he created a music club and composed for its chamber group. With two other chamber groups, he has played Haydn's Piano Trio No. 39 in G Major (“Gypsy”), Dvorak's Piano Trio Op. 90 (“Dumky”), and Schumann's Piano Quintet Op. 44. Stephen has always been enthusiastic about sharing music with his community, and started performing regularly in hospitals, retirement centers, and churches in New England since age 8. He inspires and leads his music club members to also serve in the community and spread a passion for music.
				</p>
				</div>

				<div className="bio-paragraph">
				<p className="long-copy">
					<b><a href="/css/img/Piano Repertoire List.pdf" target="_blank" rel="noopener noreferrer">Repertoire List (PDF)</a></b>
				</p>
				</div>
			</div>
		</section>
		<Footer />
	</body>
  )
}
