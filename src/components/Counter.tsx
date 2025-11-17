import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function Counter(): React.JSX.Element {
    const [value, setValue] = useState<number>(0);
    return (
        <span>
            <p>Value: {value}</p>
            <Button onClick={() => setValue(1 + value)}>Add One</Button>
            <Button onClick={() => setValue(value - 1)}>Subtract One</Button>
        </span>
    );
}
