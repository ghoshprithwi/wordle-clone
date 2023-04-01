import React from "react";

function GuessInput() {
  const [guess, setGuess] = React.useState("");

  const handleGuessSubmit = (event) => {
    event.preventDefault();

    if (guess === "") {
      return;
    }

    console.info({ guess });
    setGuess("");
  };
  return (
    <>
      <div>
        <form className="guess-input-wrapper" onSubmit={handleGuessSubmit}>
          <label htmlFor="guess-input">Enter guess:</label>
          <input
            id="guess-input"
            type="text"
            value={guess}
            onChange={(event) => setGuess(event.target.value.toUpperCase())}
			pattern="[A-Z]{5}"
          />
        </form>
      </div>
    </>
  );
}

export default GuessInput;
