import { useState } from 'react'
import '../styles/Job.css';
import Note from './Note'
import NoteForm from './NoteForm'
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import moment from 'moment/moment';

const Job = (props) => {
  const [notes, setNotes] = useState([])
  const [showAddNote, setShowAddNote] = useState(false)
  const [content, setContent] = useState('')

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      id: notes.length + 1,
      creationDate: moment().format('MMMM Do YYYY, h:mm:ss a'),
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
        <h2>Job Title: {props.jobTitle}</h2>
        <Divider variant="middle"/>
        <br/>

        <table>
          <tbody>
            <tr>
              <th id="key"></th>
              <th id="value"></th>
            </tr>
            <tr>
              <td>Job ID: </td>
              <td>{props.id}</td>
            </tr>
            <tr>
              <td>Creation Date: </td>
              <td>{props.creationDate}</td>
            </tr>
            <tr>
              <td>Client Name: </td>
              <td>{props.clientName}</td>
            </tr>
            <tr>
              <td>Client Email: </td>
              <td>{props.clientEmail}</td>
            </tr>
            <tr>
              <td>Client Phone Number: </td>
              <td>{props.clientPhoneNum}</td>
            </tr>
            <tr>
              <td>Status: </td>
              <td>{props.statuses[props.status]}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <br/>

      <div className="note-list">
        <h3>Notes</h3>
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

      {!showAddNote && <Button id="new-note-button" variant="contained" onClick={handleShowAddNoteChange}>Create New Note</Button>}

      {showAddNote && <NoteForm
          addNote={addNote}
          content={content}
          handleContentChange={handleContentChange}
        />}
    </div>
  )
}

export default Job;