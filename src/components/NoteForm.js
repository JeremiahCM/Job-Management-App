import { useState } from 'react'
import '../styles/NoteForm.css';

const NoteForm = (props) => {
  return (
    <div className="note-form-container">
      <form id="note-form" onSubmit={props.addNote}>
        <h3>Create New Note</h3>
        <div className="content">
          <div>Content</div>
          <textarea name="content" placeholder="Enter note here..." onChange={props.handleContentChange} form="note-form"></textarea>
        </div>
        <div>
          <button type="submit">Add Note</button>
        </div>
      </form>
    </div>
  )
}

export default NoteForm;