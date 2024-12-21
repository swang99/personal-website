import Footer from '~/components/Footer';
import MainNav from '~/components/MainNav';
import Experience from '~/components/Experience';

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
					<Experience company="Harmonize" date="May 2024 - Jun 2024"
							    position="Full Stack Engineer" 
							    tools={["React", "Javascript", "Node.js", "Express", 
								        "Zustand", "MongoDB", "Spotify API"]}
							    bullets={[
								<li key={"harmonize-1"}> Developed both frontend and backend of application that combines elements of Spotify with Instagram, turning music-sharing into a more social activity </li>]}
								link=""/>

					<Experience company="Opportune" date="Sep 2023 - Mar 2024"
							position="Frontend Lead" 
							tools={["React", "Remix Run", "HTML/CSS", "Javascript", "Typescript", "Axios", "MongoDB", "Figma"]}
							bullets={[ 
								<li key={"opportune-1"}>Developed entire frontend of team-matching and project management application for new hires using React, Remix, Typescript, HTML/CSS, and seamlessly wired data from backend using Axios and MongoDB </li>,
								<li key={"opportune-2"}> Featured at technology symposium attracting over 400 students, faculty, and community members </li>
							]}
							link="https://medium.com/dartmouth-cs98/skills-matched-teams-built-projects-delivered-faster-with-opportune-205e84b3f040" />

					<Experience company="Traffic Sign Identifier" date="2021"
							    position="" 
							    tools={["Python", "Keras", "Optuna"]}
							    bullets={[
								<li key={"traffic-1"}> Built a convolutional neural network that predicts 42 types of traffic signs with over 99% accuracy </li>,
								<li key={"traffic-2"}> Used hyperparameter tuning libraries to streamline testing of hundreds of different neural networks </li>]}
								link="https://github.com/swang99/Projects/tree/main/Traffic%20Sign%20Identifier" />
				</div>
			</section> 
	

			<section className="section-other-projects">
				<div className="row">
					<h2><b>More Projects!</b></h2>

					<Experience company="Audio Visualizer" date="Dec 2022"
							    position="" 
							    tools={["Javascript", "p5.js"]}
							    bullets={[
								<li key={"audiovis-1"}> Javascript music player with shuffle, loop, rewind/seek track, progress bar, and background customization </li>,
								<li key={"audiovis-2"}> Visualizes the sound waves of any track from user upload using Fast Fourier transform in d3.js </li>]}
								link="https://github.com/swang99/Projects/tree/main/Audio%20Visualizer" />
					
					<Experience company="Nuggets" date="May - Jun 2021"
							    position="" 
							    tools={["C", "Bash"]}
							    bullets={[
								<li key={"nuggets-1"}> Live server gold-mining game implemented in C serving up to 26 players with leaderboard and map selection </li>,
								<li key={"nuggets-2"}> Maintained 2000+ lines of code, and designed unit, integration, and system tests using Makefile </li>,
								<li key={"nuggets-3"}> Managed source code in Github using Git flow model and adhered to the agile scrum framework </li>]}
								link="https://github.com/cs50spring2021/nuggets-sapphire" />
					
					<Experience company="Insighting Shopping Data" date="Sep 2021 - Nov 2021"
							position="" 
							tools={["Python", "Pandas", "scikit-learn"]}
							bullets={[ 
								<li key={"insighting-1"}> Assisted Insighting, an AI consumer insights Israeli startup backed by NVIDIA, in automating its data pipeline </li>,
								<li key={"insighting-2"}> Developed DBScan customer segmentation algorithm in scikit-learn and refined parameters for 20+ features </li>,
								<li key={"insighting-3"}> Used Pandas to illuminate monthly insights about Insighting's products and customers within its database </li>]}
							link="" />
				</div>
			</section>

			<Footer />
		</body>
	)
}
