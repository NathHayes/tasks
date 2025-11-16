import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return (1 + Math.floor(Math.random() * 6)) as number;
}

export function TwoDice(): React.JSX.Element {
    const [leftDie, setLeft] = useState<number>(1);
    const [rightDie, setRight] = useState<number>(2);

    function rollLeft() {
        setLeft(d6());
    }

    function rollRight() {
        setRight(d6());
    }

    const isEqual = leftDie === rightDie;
    const isLose = isEqual && leftDie === 1;

    return (
        <div>
            <span data-testid="left-die">{leftDie}</span>{" "}
            <span data-testid="right-die">{rightDie}</span>
            <div>
                <Button onClick={rollLeft}>Roll Left</Button>
                <Button onClick={rollRight}>Roll Right</Button>
            </div>
            {isLose ?
                <div>Lose</div>
            : isEqual ?
                <div>Win</div>
            :   null}
        </div>
    );
}
