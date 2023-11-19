import React from 'react'

interface vidProps {
	title: string;
	vidLink: string;
}
export default function Video(props:vidProps) {
  return (
	<div>
		<div className="row">
			<p className="long-copy">
			<b>{props.title}</b>
			</p>
		</div>
		<div className="wrap-element">
			<p className="long-copy">
				<iframe src={props.vidLink} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture allowfullscreen" title={props.title}></iframe>
			</p>
		</div>
	</div>
  )
}
