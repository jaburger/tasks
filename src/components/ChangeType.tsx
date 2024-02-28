import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [currType, swapType] = useState<QuestionType>(
        "short_answer_question"
    );
    const typeSwitchMap: Record<QuestionType, QuestionType> = {
        multiple_choice_question: "short_answer_question",
        short_answer_question: "multiple_choice_question"
    };
    function toggleType(): void {
        swapType(typeSwitchMap[currType]);
    }
    return (
        <div>
            <Button onClick={toggleType}>Change Type</Button>
            {currType === "multiple_choice_question" && (
                <div>Multiple Choice</div>
            )}
            {currType === "short_answer_question" && <div>Short Answer</div>}
        </div>
    );
}
