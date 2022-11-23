'use client';
import { Chessboard } from 'react-chessboard';
import { useEffect, useState } from 'react';
import { Chess } from 'chess.js';

const Main = () => {
	// setChess not needed
	const [chess] = useState(new Chess());
	const [updatedPosition, setUpdatedPosition] = useState(chess.fen());
	const [simulationState, setSimulationState] = useState(false);

	const makeRandomMove = () => {
		const moves = chess.moves();
		const move = moves[Math.floor(Math.random() * moves.length)];
		chess.move(move);
		setUpdatedPosition(chess.fen());
	};

	useEffect(() => {
		if (!chess.isGameOver() && simulationState) {
			setTimeout(makeRandomMove, 200);
		}
	}, [updatedPosition, simulationState]);

	return (
		<div className="page">
			<Chessboard position={updatedPosition} />
			<button
				onClick={() => {
					setSimulationState(!simulationState);
				}}
			>
				Toggle Simulation
			</button>
		</div>
	);
};

export default Main;
