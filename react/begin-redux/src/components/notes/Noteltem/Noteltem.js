import React from "react";

const NoteItem = ({ 
    note, 
    editing, 
    onToggle, 
    onChange, 
    onUpdate, 
    onDelete
}) => {
    const handleToggle = () => {
        onToggle({ id: note.id, text: note.text });
    };

    const handleChange = e => {
        const { value } = e.target;
        onChange({ value }, true);
    };

    const handleKeyPress = e => {
        if (e.key === "Enter") {
        onUpdate();
        }
    };

    const handleDelete = e => {
        e.stopPropagation();
        onDelete({ id: note.id });
    };

    return (
        <div>
            <button onClick={handleToggle}>
                {editing.id === note.id ? (
                    <input
                    type="text"
                    name="note"
                    value={editing.text}
                    autoFocus
                    onChange={handleChange}
                    onKeyPress={handleKeyPress}
                    />
                    ) : (
                    <div>{note.text}</div>
                )}
            </button>
            <div onClick={handleDelete}>&times;</div>
        </div>
    );
};

export default NoteItem;