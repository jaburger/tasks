import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const colors = [
        "red",
        "yellow",
        "green",
        "blue",
        "orange",
        "purple",
        "turquoise",
        "magenta"
    ];
    const [currColor, setColor] = useState<string>(colors[0]);

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }

    return (
        <div>
            <h3>Change Color</h3>
            {colors.map((color: string) => (
                <Form.Check
                    inline
                    key={color}
                    type="radio"
                    name="Change Color"
                    onChange={updateColor}
                    label={color}
                    value={color}
                    checked={color === currColor}
                    style={{ backgroundColor: color }}
                >
                    {}
                </Form.Check>
            ))}
            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: currColor,
                    display: "inline-block",
                    verticalAlign: "bottom",
                    marginLeft: "50px"
                }}
            >
                {currColor}
            </div>
        </div>
    );
}
