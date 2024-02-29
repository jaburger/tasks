import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [leftDie, changeLeftValue] = useState<number>(1);
    const [rightDie, changeRightValue] = useState<number>(2);

    function rollLeft(): void {
        changeLeftValue(d6());
    }
    function rollRight(): void {
        changeRightValue(d6());
    }

    return (
        <div>
            <Button onClick={rollLeft}>Roll Left</Button>
            <span data-testid="left-die">{leftDie}</span>
            <Button onClick={rollRight}>Roll Right</Button>
            <span data-testid="right-die">{rightDie}</span>
            {leftDie === rightDie && leftDie !== 1 ? (
                <div>Congrats, You Win!</div>
            ) : (
                <div>Sorry, You Lose!</div>
            )}
        </div>
    );
}
