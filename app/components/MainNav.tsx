import { NavLink } from '@remix-run/react';
import { useState, useEffect } from 'react';

export default function MainNav() {
  const [menuToggle, setMenuToggle] = useState("menu-outline")
  const [navOpen, setNavOpen] = useState("")
  const [sticky, setSticky] = useState(false)

  useEffect(() => {
	// Check the scroll position and determine whether to make the navbar sticky
	const handleScroll = () => {
		setSticky(window.scrollY > 0);
	};
  
	// Add scroll event listener
	window.addEventListener('scroll', handleScroll);
  	
	return () => {
      window.removeEventListener("scroll", handleScroll);
  	};
  }, []);

  function handleClick() {
	// set menu icon to open/closed
	if (menuToggle === "menu-outline") {
		setMenuToggle("close-outline")
	} else {
		setMenuToggle("menu-outline")
	}

	if (menuToggle === "menu-outline") {
		setNavOpen("menu-open");
	} else {
		setNavOpen("");
	}
  }

  return (
	<div className="row">
		<nav className={`${sticky ? "sticky": ""}`}>
			<NavLink className={`SW-name ${sticky ? "sticky-name" : ""}`} to="/">
				<h1>Stephen Wang</h1>
			</NavLink>
			<ul>
				<li><NavLink to="/">About</NavLink></li>
				<li><NavLink to="/cs">CS</NavLink></li>
				<li><NavLink to="/piano">Piano</NavLink></li>
				<li><NavLink to="/photography">Photography</NavLink></li>
			</ul>
		</nav>
		<nav className={`${sticky ? "sticky": ""} mobile-nav ${navOpen}`}>
			<NavLink className={`mobile-SW-name ${sticky ? "sticky-name": ""}`} to="/">
				<h1>Stephen Wang</h1>
			</NavLink>
			<button className={`mobile-nav-icon ${menuToggle}`} onClick={handleClick}>
				<ion-icon name={menuToggle}></ion-icon>
			</button>
			<ul>
				<li><NavLink to="/">About</NavLink></li>
				<li><NavLink to="/piano">Piano</NavLink></li>
				<li><NavLink to="/cs">CS</NavLink></li>
				<li><NavLink to="/photography">Photography</NavLink></li>
			</ul>
		</nav>
	</div>
  )
}
