import { Link } from '@remix-run/react';

interface imgInfo {
	path: string;
	alt: string;
}
export default function Image(props:imgInfo) {
  return (
	<li>
		<Link className="my-photo" to={props.path}> 
			<img src={props.path} alt={props.alt}></img>
		</Link>
	</li>
	
  )
}
