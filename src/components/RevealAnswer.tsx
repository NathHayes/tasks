import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [revealed, setRevealed] = useState<boolean>(false);

    const setReveal = () => {
        setRevealed(!revealed);
    };
    return (
        <div>
            <div>
                <Button onClick={setReveal}>
                    {revealed ? "Hide Answer" : "Reveal Answer"}
                </Button>
            </div>
            {revealed && <p>42</p>}
        </div>
    );
}
