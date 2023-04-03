import React from "react";
import { STATUS_RUNNING } from "../../constants";

function GuessInput({ updateGuessList, gameStatus }) {
	const [guess, setGuess] = React.useState("");

	const handleGuessSubmit = (event) => {
		event.preventDefault();

		if (guess === "") {
			return;
		}

		updateGuessList(guess);

		console.info({ guess });
		setGuess("");
	};
	return (
		<>
			<div>
				<form className="guess-input-wrapper" onSubmit={handleGuessSubmit}>
					<label htmlFor="guess-input">Enter guess:</label>
					<input
						required
						id="guess-input"
						minLength={5}
						maxLength={5}
						type="text"
						value={guess}
						onChange={(event) => setGuess(event.target.value.toUpperCase())}
						pattern="[a-zA-Z]{5}"
						disabled={gameStatus !== STATUS_RUNNING}
					/>
				</form>
			</div>
		</>
	);
}

export default GuessInput;
