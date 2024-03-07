import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [currAttempts, setCurrAttempts] = useState<number>(3);
    const [attemptsRequested, setAttemptsRequested] = useState<number>(0);

    function addAttempts(amount: number) {
        setCurrAttempts(currAttempts + amount);
    }

    function removeAttempts() {
        setCurrAttempts(currAttempts - 1);
    }

    function changeRequestedAttempts(amount: number) {
        setAttemptsRequested(amount);
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <Form.Group controlId="attemptRequestNumericalInputBox">
                <Form.Label>Request Attempts</Form.Label>
                <Form.Control
                    type="number"
                    value={attemptsRequested}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        changeRequestedAttempts(
                            parseInt(event.target.value) || 0
                        )
                    }
                />
            </Form.Group>
            <Button onClick={() => addAttempts(attemptsRequested)}>gain</Button>
            <Button onClick={removeAttempts} disabled={currAttempts <= 0}>
                use
            </Button>
            <div>Attempts left: {currAttempts}</div>
        </div>
    );
}
