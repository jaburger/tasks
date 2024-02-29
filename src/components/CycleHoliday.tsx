import React, { useState } from "react";
import { Button } from "react-bootstrap";

export type Holiday = "🦃" | "🎃" | "🎆" | "🎄" | "☘️"; //Thanksgiving, Halloween, Fourth of July, Christmas, St. Patrick's Day

export function CycleHoliday(): JSX.Element {
    const [currHoliday, changeHoliday] = useState<Holiday>("🎆");

    const alphabeticalHolidays: Record<Holiday, Holiday> = {
        "🎄": "🎆",
        "🎆": "🎃",
        "🎃": "☘️",
        "☘️": "🦃",
        "🦃": "🎄"
    };
    const calendarHolidays: Record<Holiday, Holiday> = {
        "☘️": "🎆",
        "🎆": "🎃",
        "🎃": "🦃",
        "🦃": "🎄",
        "🎄": "☘️"
    };

    function cycleAlphabetically() {
        changeHoliday(alphabeticalHolidays[currHoliday]);
    }
    function cycleChronologically() {
        changeHoliday(calendarHolidays[currHoliday]);
    }
    return (
        <div>
            <Button onClick={cycleAlphabetically}>Cycle by Alphabet</Button>
            <Button onClick={cycleChronologically}>Cycle by Year Dates</Button>
            <div>Holiday: {currHoliday}</div>
        </div>
    );
}
