import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import { NUM_OF_GUESSES_ALLOWED, STATUS_LOST, STATUS_RUNNING, STATUS_WON } from "../../constants";
import WonBanner from "../WonBanner/WonBanner";
import LostBanner from "../LostBanner/LostBanner";

function Game() {
	const [guessList, setGuessList] = React.useState([]);
	// Possible values -> running, won, lost
	const [gameStatus, setGameStatus] = React.useState(STATUS_RUNNING);
	const [answer, setAnswer] = React.useState(() => sample(WORDS));
	console.info({ answer });

	const updateGuessList = (guess) => {
		const newGuessList = [...guessList, guess];
		setGuessList(newGuessList);

		if (guess === answer) {
			setGameStatus(STATUS_WON);
		} else if (newGuessList.length >= NUM_OF_GUESSES_ALLOWED) {
			setGameStatus(STATUS_LOST);
		}
	}

	function handleRestart() {
		const newAnswer = sample(WORDS);
		setAnswer(newAnswer);
		setGuessList([]);
		setGameStatus(STATUS_RUNNING);
	}

	return (
		<>
			<GuessResults guessList={guessList} answer={answer} />
			<GuessInput updateGuessList={updateGuessList} gameStatus={gameStatus} />
			{
				gameStatus === STATUS_WON && <WonBanner numOfGuesses={guessList.length} action={handleRestart} />
			}
			{
				gameStatus === STATUS_LOST && <LostBanner answer={answer} action={handleRestart} />
			}
		</>
	);
}

export default Game;
