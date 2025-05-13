import Footer from '~/components/Footer';
import MainNav from '~/components/MainNav';
import Experience from '~/components/Experience';
import { csData } from '~/data/websiteData';

export default function cs() {
	return (
		<body className="personal-slide">
			<MainNav />
			<header className="cs-bg"></header>
    
			<section className="section-experience">
				<div className="row">
					<h2><b>Experience</b></h2>
					<h3 style={{ textAlign: "center" }}>Here's my <b><u> <a href="/styles/img/SW Resume.pdf" target="_blank" rel="noopener noreferrer">resume!</a></u></b></h3> 
					<p style={{ textAlign: "center" }}> I have a broad skillset, from ML model building, data engineering, to full-stack web development!</p>
				</div>
			</section>

			<section className="section-projects">
				<div className="row">
					<h2><b>Projects</b></h2>
					{csData.projects.map((item, index) =>
						<Experience key={index} title={item.title} date={item.date}  
						tools={item.tools} bullets={item.bullets} link={item.link} />
					)}
				</div>
			</section>

			<Footer />
		</body>
	)
}
