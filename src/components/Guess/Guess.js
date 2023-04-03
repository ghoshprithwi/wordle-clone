import React from "react";
import { checkGuess } from "../../game-helpers";
import { range } from "../../utils";

// Cell Component should only be used inside the Guess Component.
function Cell({ letter, status }) {
	const className = status ? `cell ${status}` : 'cell';
	return <span className={className}>{letter}</span>
}

function Guess({ item, answer }) {
	const results = checkGuess(item, answer);

	return (
		<>
			<p className="guess" >
				{
					range(5).map(
						(num) => (
							<Cell
								key={num}
								letter={results ? results[num].letter : ''}
								status={results ? results[num].status : ''}
							/>
						)
					)
				}
			</p>
		</>
	);
}

export default Guess;
