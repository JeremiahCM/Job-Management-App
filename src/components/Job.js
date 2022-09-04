import { useState } from 'react'
import '../styles/Job.css';
import Note from './Note'
import NoteForm from './NoteForm'

const Job = (props) => {
  const [notes, setNotes] = useState([])
  const [content, setContent] = useState(
    'new note...'
  )

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      id: notes.length + 1,
      creationDate: new Date(),
      content: content,
    }

    setNotes(notes.concat(noteObject))
    setContent('')
  }

  return (
    <div className="job-item">
      <div className="job-details">
        <div>ID: {props.id}</div>
        <div>Creation Date: {props.creationDate}</div>
        <div>Client Name: {props.clientName}</div>
        <div>Client Email: {props.clientEmail}</div>
        <div>Client Phone Number: {props.clientPhoneNum}</div>
        <div>Status: {props.statuses[props.status]}</div>
      </div>
      <NoteForm
        addJob={addNote}
        content={content}
      />
      <div className="job-list">
        <h3>Notes</h3>
      </div>
    </div>
  )
}

export default Job;