import React from 'react';
import Note from './Note';

function NoteList({ notes, deleteNote }) {
  return (
    <div>
      {notes.length > 0 ? (
        notes.map((note, index) => (
          <Note key={index} note={note} deleteNote={() => deleteNote(index)} />
        ))
      ) : (
        <p className="text-center">No notes available</p>
      )}
    </div>
  );
}

export default NoteList;
