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
					<Experience company="Tradestation" date="Jun 2023 - Aug 2023"
					            position="Data Engineering Intern" 
								tools={["Python", "SQL", "Databricks", "AWS", "PowerBI"]}
								bullets={[
								<li key={0}> Designed pipeline to convert Excel data on 200,000+ brokerage accounts into gold-level datasets within AWS </li>, 
								<li key={1}> Created automated scripts using Python, SQL, and Databricks to detect 99.5% of account anomalies in 2023 based on accounting rules and exceptions resulting from 24-7 cryptocurrency trading </li>,
								<li key={2}> Created rule notebook to fix 78% of account anomalies in 2023, saving financial managers at least 1 hour/day </li>]}
								link=""/>
					
					<Experience company="Dartmouth Computer Science Department" date="Jan 2023 - present"
					            position="TA for COSC 1: Introduction to Programming, COSC 74: Machine Learning" 
								tools={["Python", "OOP", "Machine Learning"]}
								bullets={[
								<li key={0}> Lead weekly recitation sessions, office hours, and 1-on-1s to reinforce key concepts (loops, OOP, recursion, graph theory, ML), support students in exam/project preparation, and encourage coding best practices </li>, 
								<li key={1}> Assisted graduate TAs in COSC 1 to improve recitation materials used by 400+ students per year </li>]} 
								link="" />
					
					<Experience company="U.S. Army Engineer Research and Development Center" 
								date="Jun 2021 - Jun 2022"
					            position="Computer Science Intern, Engineered Resilient Systems" 
								tools={["Python", "Tensorflow", "KerasTuner", "Optuna", 
								        "Research", "scikit-learn", "matplotlib"]}
								bullets={[
								<li key={0}>
									Designed ensemble deep learning and gradient-boosting models using Python, Tensorflow, XGBoost, LightGBM, and scikit-learn to reduce error in key rotorcraft performance metric predictions by over 90%
								</li>,
								<li key={1}>
									Automated testing of over 1,500 neural network configurations using Optuna and KerasTuner
								</li>,
								<li key={2}> Amended machine learning pipeline with data visualization capabilities using matplotlib to pinpoint strength of airfoil performance predictions at different angles-of-attack and Mach number for the top 50 models </li>,
								<li key={3}> Co-authored the research paper “Synthetic CFD Estimation for Blackhawk Airfoil Drag Coefficient” </li>, 
								<li key={4}> Work featured in laboratory research symposium and RD 2022 conference reaching over 600 attendees </li>]} 
								link=""/>
				</div>
			</section> 

			<section className="section-projects">
				<div className="row">
					<h2><b>Projects</b></h2>
					<Experience company="Opportune" date="Sep 2023 - present"
							position="Frontend Lead" 
							tools={["React", "Remix Run", "HTML/CSS", "Javascript", "Typescript", "Axios", "MongoDB", "Figma"]}
							bullets={[ 
								<li key={0}>Developed entire frontend of team-matching and project management application for new hires using React, Remix, Typescript, HTML/CSS, and seamlessly wired data from backend using Axios and MongoDB </li>,
								<li key={1}> Featured at technology symposium attracting over 400 students, faculty, and community members </li>
							]}
							link="https://github.com/dartmouth-cs98-23f/opportune-frontend" />
					
					<Experience company="Insighting Shopping Data" date="Sep 2021 - Nov 2021"
							position="" 
							tools={["Python", "Pandas", "scikit-learn"]}
							bullets={[ 
								<li key={0}> Assisted Insighting, an AI consumer insights Israeli startup backed by NVIDIA, in automating its data pipeline </li>,
								<li key={1}> Developed DBScan customer segmentation algorithm in scikit-learn and refined parameters for 20+ features </li>,
								<li key={2}> Used Pandas to illuminate monthly insights about Insighting's products and customers within its database </li>]}
							link="" />

					<Experience company="Traffic Sign Identifier" date="2021"
							    position="" 
							    tools={["Python", "Keras", "Optuna"]}
							    bullets={[
								<li key={0}> Built a convolutional neural network that predicts 42 types of traffic signs with over 99% accuracy </li>,
								<li key={1}> Used hyperparameter tuning libraries to streamline testing of hundreds of different neural networks </li>]}
								link="https://github.com/swang99/Projects/tree/main/Traffic%20Sign%20Identifier" />
				</div>
			</section> 
	

			<section className="section-other-projects">
				<div className="row">
					<h2><b>More Projects!</b></h2>

					<Experience company="Audio Visualizer" date="2022"
							    position="" 
							    tools={["Javascript", "p5.js"]}
							    bullets={[
								<li key={0}> Javascript music player with shuffle, loop, rewind/seek track, progress bar, and background customization </li>,
								<li key={1}> Visualizes the sound waves of any track from user upload using Fast Fourier transform in d3.js </li>]}
								link="https://github.com/swang99/Projects/tree/main/Audio%20Visualizer" />
					
					<Experience company="Nuggets" date="2021"
							    position="" 
							    tools={["C", "Bash"]}
							    bullets={[
								<li key={0}> Live server gold-mining game implemented in C serving up to 26 players with leaderboard and map selection </li>,
								<li key={1}> Maintained 2000+ lines of code, and designed unit, integration, and system tests using Makefile </li>,
								<li key={2}> Managed source code in Github using Git flow model and adhered to the agile scrum framework </li>]}
								link="https://github.com/cs50spring2021/nuggets-sapphire" />
					
					<Experience company="H&M Personalized Fashion Recommendations" date="2022"
							    position="" 
								tools={["Python", "Pandas", "Seaborn"]}
								bullets={[
								"Given past transaction data from H&M, the objective was to recommend 12 products that a customer would most likely purchase. This was the following methodology in my final model:", 
								<li key={0}> Fill the first 6 spots with the customer's past purchases </li>,
								<li key={1}> For the customer's top 3 purchases, fill 3 more spots with the item most frequently-bought with each of those 3 items. </li>,
								<li key={2}> Fill the remaining spots with the most popular items overall and remove any repeats </li>]}
								link="https://github.com/swang99/Projects/blob/main/h%26m-comp-best.ipynb"/>
				</div>
			</section>

			<Footer />
		</body>
	)
}
