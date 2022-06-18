import React from 'react';
import { Link } from 'react-router-dom';
import './VendingMachine.css';
import Message from './Message';
import vendingMachineImg from './VendingMachine.png';

const VendingMachine = () => {
	return (
		<div
			className="VendingMachine"
			style={{ backgroundImage: `url(${vendingMachineImg})` }}
		>
			<Message>
				<h1>Hello, I am a Vending Machine. What would you like to eat?</h1>
			</Message>
			<Message>
				<h1>
					<Link to="/chips">Chips</Link>
				</h1>
				<h1>
					<Link to="/soda">Soda</Link>
				</h1>
				<h1>
					<Link to="/candy">Candy</Link>
				</h1>
			</Message>
		</div>
	);
};

export default VendingMachine;
