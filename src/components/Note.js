import { useState } from 'react'
import '../styles/Note.css';

const Note = (props) => {
  return (
    <div className="note-item">
      <li>Note {props.id}: {props.content}</li>
    </div>
  )
}

export default Note;