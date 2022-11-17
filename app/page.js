'use client';
import { Chessboard } from 'react-chessboard';
import { useEffect, useState } from 'react';
import { Chess } from 'chess.js';

const Main = () => {
	const [chess, setChess] = useState(new Chess());
	const [updatedPosition, setUpdatedPosition] = useState();
	const [halfMoves, setHalfMoves] = useState(0);
	const maxHalfMoves = 500;

	const makeRandomMove = () => {
		const moves = chess.moves();
		const move = moves[Math.floor(Math.random() * moves.length)];
		chess.move(move);
		setUpdatedPosition(chess.fen());
		setHalfMoves(halfMoves + 1);
		console.log(halfMoves);
	};

	const simulate = () => {
		if (halfMoves < maxHalfMoves) {
			makeRandomMove();
		}

		setTimeout(simulate, 10);
	};

	return (
		<div className="page">
			<Chessboard position={updatedPosition} />
			<button
				onClick={() => {
					simulate();
				}}
			>
				Start Simulation
			</button>
		</div>
	);
};

export default Main;
