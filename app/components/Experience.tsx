import { Link } from '@remix-run/react';

interface expInfo {
	title: string;
	date: string;
	position?: string | null;
	tools: string[];
	bullets: any[];
	link?: string;
}
export default function Experience(props:expInfo) {
  return (
	<div className="resume-exp">
		<div className="exp-title">
			<b> {props.title} </b>
			{props.link ? <Link to={props.link}><ion-icon name="logo-github"></ion-icon></Link> : null}
			<span className="exp-date"> {props.date} </span>
		</div>
		<div className="exp-pos">
			<i> {props.position} </i>
		</div>
		<div className="exp-tools">
			{props.tools.map(tool => {
				return <span className="lang-button" key={tool}> {tool} </span>
			})}
		</div>
		<div className="exp-description">
			{props.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}
		</div>
	</div>
  )
}
