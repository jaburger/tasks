import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>("");

    function updateAnswer(event: React.ChangeEvent<HTMLTextAreaElement>) {
        setAnswer(event.target.value);
    }

    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="formCheckAnswer">
                <Form.Label>Enter Response to check:</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={2}
                    value={answer}
                    onChange={updateAnswer}
                />
            </Form.Group>
            <div>{expectedAnswer === answer ? "✔️" : "❌"}</div>
        </div>
    );
}
