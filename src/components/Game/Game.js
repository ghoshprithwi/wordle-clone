import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import { NUM_OF_GUESSES_ALLOWED, STATUS_LOST, STATUS_RUNNING, STATUS_WON } from "../../constants";
import WonBanner from "../WonBanner/WonBanner";
import LostBanner from "../LostBanner/LostBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
	const [guessList, setGuessList] = React.useState([]);
	// Possible values -> running, won, lost
	const [gameStatus, setGameStatus] = React.useState(STATUS_RUNNING);

	const updateGuessList = (guess) => {
		const newGuessList = [...guessList, guess];
		setGuessList(newGuessList);

		if (guess === answer) {
			setGameStatus(STATUS_WON);
		} else if (newGuessList.length >= NUM_OF_GUESSES_ALLOWED) {
			setGameStatus(STATUS_LOST);
		}
	}

	return (
		<>
			<GuessResults guessList={guessList} answer={answer} />
			<GuessInput updateGuessList={updateGuessList} gameStatus={gameStatus} />
			{
				gameStatus === STATUS_WON && <WonBanner numOfGuesses={guessList.length} />
			}
			{
				gameStatus === STATUS_LOST && <LostBanner answer={answer} />
			}
		</>
	);
}

export default Game;
