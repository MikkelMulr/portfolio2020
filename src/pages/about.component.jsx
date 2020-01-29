import React from 'react';
import './about.styles.scss';

export default function About() {
	return (
		<div className='About'>
			<div className='About--container'>
				<div className='About--header'>
					<div className='About--header-inner'>
						<h2>ABOUT ME</h2>
					</div>
				</div>
				<p className='About--text'>
					I'm Mike, a web developer from Toronto, Canada. A few years ago I decided to step away from my career as a
					freelance illustrator to persue the thing I always felt was my real goal, programming. From a humble "Hello
					World" to full fledged online websites and applications I used every step and stumble as a learning experience
					to grow and as inspiration to build new things. The problem solving and creativity that are required for every
					project brings a powerful sense of fullfilment and desire to keep growing.
				</p>
			</div>
		</div>
	);
}
