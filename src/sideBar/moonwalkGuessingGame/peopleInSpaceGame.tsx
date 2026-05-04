import { Modal, Typography, Button } from "@mui/material";
import { GiAstronautHelmet } from "react-icons/gi";
import styles from "./peopleInSpaceGame.module.css";
import { useState } from "react";

export function PeopleInSpaceGame({ onClose }: { onClose: () => void }) {
  const [guess, setGuess] = useState(0);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const totalPeopleMoonWalked = 12; // Total number of people who have walked on the moon

  const handleIncrement = () => {
    setGuess(guess + 1);
  };

  const handleDecrement = () => {
    if (guess > 0) {
      setGuess(guess - 1);
    }
  };

  const handleSubmit = (guess: number) => {
    if (guess === totalPeopleMoonWalked) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  return (
    <Modal open={true} onClose={onClose}>
      <div className={styles.guessingGameContainer}>
        <div className={styles.headerContainer}>
          <Typography variant="h4">
            {isCorrect
              ? "Correct!"
              : "How many people have walked on the moon?"}
          </Typography>
          {!isCorrect && (
            <Typography>
              Try to guess the number of people who have moon walked!
            </Typography>
          )}
        </div>

        <div className={styles.numberInputContainer}>
          <div className={styles.astronautCounterContainer}>
            {!isCorrect && (
              <Button variant="outlined" onClick={handleDecrement}>
                -
              </Button>
            )}
            <GiAstronautHelmet
              size={100}
              color={isCorrect ? "green" : "white"}
            />
            {!isCorrect && (
              <Button variant="outlined" onClick={handleIncrement}>
                +
              </Button>
            )}
          </div>
          <div className={styles.numberDisplay}>{guess} people</div>
        </div>

        <div className={styles.buttonsContainer}>
          {isCorrect ? (
            <Button variant="outlined" onClick={onClose}>
              Close
            </Button>
          ) : (
            <>
              <Button variant="outlined" onClick={onClose}>
                Cancel
              </Button>
              <Button variant="outlined" onClick={() => handleSubmit(guess)}>
                Submit
              </Button>
            </>
          )}
        </div>
        {isCorrect === false && (
          <Typography variant="caption">Incorrect..Try again!</Typography>
        )}
      </div>
    </Modal>
  );
}
