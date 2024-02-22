import { Link } from '@remix-run/react';

export default function Footer() {
	
  return (
	<footer>
		<div className="row social-icons">
			<Link to="mailto:swang.2420@gmail.com" className="fa-envelope">
				<ion-icon name="mail"></ion-icon>
			</Link>
			<Link to="https://github.com/swang99" className="fa-github">
				<ion-icon name="logo-github"></ion-icon>
			</Link>
			<Link to="https://www.linkedin.com/in/stephenwang24/" className="fa-linkedin">
				<ion-icon name="logo-linkedin"></ion-icon>
			</Link>
			<Link to="https://www.youtube.com/user/MrStephenwang" className="fa-youtube">
				<ion-icon name="logo-youtube"></ion-icon>
			</Link>
		</div>
		<p> Copyright &copy; 2023 by Stephen Wang. All rights reserved. </p>
	</footer>
  )
}
