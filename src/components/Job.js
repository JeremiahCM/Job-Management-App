import { useState } from 'react'
import { v4 as uuid } from 'uuid';
import './Job.css';
import Note from './Note'

const Job = (props) => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState(
    'new note...'
  )

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      id: uuid(),
      creationDate: new Date().toISOString(),
      content: newNote,
    }

    setNotes(notes.concat(noteObject))
    setNewNote('')
  }

  return (
    <div className="job-item">
      <div id="job-details">
      </div>
      <NoteForm
        addJob={addNote}
        content={newNote}
      />
      <div className="job-list">
        <h3>Notes</h3>
      </div>
    </div>
  )
}

export default Job;