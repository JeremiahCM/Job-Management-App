import { useState, useEffect } from 'react'
import '../styles/Job.css';
import Note from './Note'
import NoteForm from './NoteForm'
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import moment from 'moment/moment';
import { ClassNames } from '@emotion/react';

const Job = (props) => {
  const [notes, setNotes] = useState(props.notes)
  const [showAddNote, setShowAddNote] = useState(false)
  const [editNotes, setEditNotes] = useState(false)
  const [content, setContent] = useState('')

  useEffect(() => {
    setNotes(props.notes)
  }, [props.notes, setNotes])

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
    props.handleJobNoteAdd(noteObject)
  }

  const handleContentChange = (event) => {
    setContent(event.target.value)
  }

  const handleShowAddNoteChange = () => {
    setShowAddNote(!showAddNote)
  }

  const handleEditNotesChange = () => {
    setEditNotes(!editNotes)
    console.log(editNotes)
  }

  const handleNoteEdits = () => {

  }

  return (
    <div className="job-item">
      <Button id="exit-job-button" variant="contained" onClick={() => props.handleShowViewingTaskChange('')}>Exit</Button>
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
          {!editNotes && notes.map((note) =>
            <Note
              key={note.id}
              id={note.id}
              creationDate={note.creationDate}
              content={note.content}
            />
          )}

          <div className="edit-notes-container">
            <form id="edit-notes" onSubmit={handleNoteEdits}>
              {editNotes && notes.map((note) =>
                <div key={note.id}>
                  <div>Note {note.id}</div>
                  <textarea rows="4" id={note.id} name="content" value={note.content} form="edit-notes"></textarea>
                </div>
              )}
            </form>
          </div>
        </ul>
      </div>
      <br />

      <div>
        {!showAddNote && <Button id="new-note-button" variant="contained" onClick={handleShowAddNoteChange}>Create New Note</Button>}
        {!editNotes && <Button id="edit-notes-button" variant="contained" onClick={handleEditNotesChange}>Edit Notes</Button>}
        {editNotes && <Button id="finish-editing-button" variant="contained" onClick={handleEditNotesChange} form="edit-notes">Finish Editing</Button>}
      </div>

      {showAddNote && <NoteForm
        addNote={addNote}
        content={content}
        handleContentChange={handleContentChange}
      />}
    </div>
  )
}

export default Job;