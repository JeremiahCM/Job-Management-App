import { useState } from 'react'
import '../styles/NoteForm.css';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';

const NoteForm = (props) => {
  return (
    <div className="note-form-container">
      <form id="note-form" onSubmit={props.addNote}>
        <h3>Create New Note</h3>
        <div className="content">
          <textarea rows="10" id="content" name="content" placeholder="Enter note here..." onChange={props.handleContentChange} form="note-form"></textarea>
        </div>
        <div>
          <Button id="add-note-button" variant="contained" type="submit">Add Note</Button>
        </div>
      </form>
    </div>
  )
}

export default NoteForm;