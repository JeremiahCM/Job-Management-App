import { useState } from 'react'
import '../styles/Job.css';
import Note from './Note'
import NoteForm from './NoteForm'

const Job = (props) => {
  const [notes, setNotes] = useState([])
  const [showAddNote, setShowAddNote] = useState(false)
  const [content, setContent] = useState('')

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      id: notes.length + 1,
      creationDate: new Date().toISOString(),
      content: content,
    }

    setNotes(notes.concat(noteObject))
    setContent('')
    handleShowAddNoteChange()
    console.log(noteObject)
  }

  const handleContentChange = (event) => {
    setContent(event.target.value)
    console.log(event.target.value)
  }

  const handleShowAddNoteChange = () => {
    setShowAddNote(!showAddNote)
    console.log(showAddNote)
  }

  return (
    <div className="job-item">
      <div className="job-details">
        <div>Job ID: {props.id}</div>
        <div>Job Title: {props.jobTitle}</div>
        <div>Creation Date: {props.creationDate}</div>
        <div>Client Name: {props.clientName}</div>
        <div>Client Email: {props.clientEmail}</div>
        <div>Client Phone Number: {props.clientPhoneNum}</div>
        <div>Status: {props.statuses[props.status]}</div>
      </div>

      {!showAddNote && <button onClick={handleShowAddNoteChange}>Create New Note</button>}

      {showAddNote && <NoteForm
          addNote={addNote}erasdasd
          content={content}
          handleContentChange={handleContentChange}
        />}
      <div className="note-list">
        <h2>Notes</h2>
        <ul>
          {notes.map((note) =>
            <Note
              key={note.id}
              id={note.id}
              creationDate={note.creationDate}
              content={note.content}
            />
          )}
        </ul>
      </div>
    </div>
  )
}

export default Job;