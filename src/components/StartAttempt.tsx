import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, changeAttempts] = useState<number>(4);
    const [quizInProgress, toggleQuiz] = useState<boolean>(false);
    function subtractAttempts(): void {
        changeAttempts(attempts - 1);
    }
    function addAttempts(): void {
        changeAttempts(attempts + 1);
    }
    function quizRunner(): void {
        toggleQuiz(!quizInProgress);
    }
    return (
        <div>
            <Button
                onClick={() => {
                    subtractAttempts();
                    quizRunner();
                }}
                disabled={quizInProgress || attempts <= 0}
            >
                Start Quiz
            </Button>
            <Button onClick={quizRunner} disabled={!quizInProgress}>
                Stop Quiz
            </Button>
            <Button onClick={addAttempts} disabled={quizInProgress}>
                Mulligan
            </Button>
            {attempts}
        </div>
    );
}
