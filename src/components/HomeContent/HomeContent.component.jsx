import React from 'react';
import './HomeContent.styles.scss';

export default function HomeContent() {
	return (
		<div className='HomeContent'>
			<div className='words'>
				<span className='words--w1'>
					<h2>CREATE</h2>
				</span>
				<span className='words--w2'>
					<h2>BREAK</h2>
				</span>
				<span className='words--w3'>
					<h2>ITERATE</h2>
				</span>
			</div>
			<div className='HomeContent--quote-main'>
				<p className='HomeContent--quote'>
					“We are trying to prove ourselves wrong as quickly as possible, because only in that way can we find
					progress.”
				</p>
				<p className='HomeContent--quoteBy'>― Richard P. Feynman</p>
			</div>
		</div>
	);
}
