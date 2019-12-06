import React from "react";
import NoteItem from "components/notes/Noteltem";

const NoteList = ({ 
    notes, 
    editing, 
    onToggle, 
    onChange, 
    onUpdate, 
    onDelete
    }) => {
    const noteList = notes.map((note, i) => {
        return <NoteItem 
            note={note} 
            key={note.id} 
            editing={editing}
            onToggle={onToggle}
            onChange={onChange}
            onUpdate={onUpdate}
            onDelete={onDelete}
        />;
    });
    return (
        <div>
            <div>Your Notes...</div>
            {noteList}
        </div>
    );
};

export default NoteList;