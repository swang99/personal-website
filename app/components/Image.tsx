interface imgInfo {
	path: string;
	alt: string;
}
export default function Image(props:imgInfo) {
  return (
	<li>
		<a className="my-photo" href={props.path}> 
			<img src={props.path} alt={props.alt}></img>
		</a>
	</li>
	
  )
}
