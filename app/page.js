'use client';
import { Button, Text } from '@nextui-org/react';

const Home = () => {
	return (
		<div className="page">
			<Text
				h1
				css={{
					textGradient: '45deg, $blue600 -20%, $pink600 50%',
				}}
				weight="bold"
			>
				Welcome to Next-Chess!
			</Text>
			<Text h2 color="white">
				You can use this to play/simulate engines right in your browser
			</Text>
			<Text h2 color="white">
				This project is currently under development
			</Text>
		</div>
	);
};

export default Home;
