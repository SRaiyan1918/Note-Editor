import React from 'react';

function Note({ note, deleteNote }) {
  return (
    <div className="alert alert-secondary d-flex justify-content-between align-items-center">
      <span>{note}</span>
      <button className="btn btn-sm btn-danger" onClick={deleteNote}>
        Delete
      </button>
    </div>
  );
}

export default Note;
