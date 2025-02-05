import React from "react";

import Guess from "../Guess/Guess";
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from "../../utils";

function GuessResults({ guessList, answer }) {
	return (
		<>
			<div className="guess-results">
				{
					range(NUM_OF_GUESSES_ALLOWED).map((num) => {
						return <Guess key={num} item={guessList[num]} answer={answer} />;
					})
				}
			</div>
		</>
	);
}

export default GuessResults;
