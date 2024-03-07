import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    function toggleEditMode() {
        setEditMode(!editMode);
    }

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    function toggleIsStudent() {
        setIsStudent(!isStudent);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="editModeSwitch"
                label="Edit Mode"
                checked={editMode}
                onChange={toggleEditMode}
            >
                {}
            </Form.Check>
            {editMode && (
                <>
                    <Form.Check
                        type="checkbox"
                        id="isStudentCheckbox"
                        label={"Is " + name + " a student?"}
                        checked={isStudent}
                        onChange={toggleIsStudent}
                    >
                        {""}
                    </Form.Check>
                    <Form.Group controlId="nameTextBox">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control
                            type="text"
                            value={name}
                            onChange={updateName}
                        />
                    </Form.Group>
                </>
            )}
            {!editMode &&
                name + " is " + (isStudent ? "" : "not") + " a student"}
        </div>
    );
}
