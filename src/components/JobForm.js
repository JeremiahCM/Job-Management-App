import { useState } from 'react'
import '../styles/JobForm.css';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';

const JobForm = (props) => {
  return (
    <div className="job-form-container">
      <form id="job-form" onSubmit={props.addJob}>
        <h2>Create New Job</h2>
        <Divider variant="middle" />
        <br/>
        <div className="title">
          <label>Job Title: </label>
          <input type="text" value={props.jobTitle} onChange={props.handleTitleChange}/>
        </div>
        <div className="name">
          <label>Client Name: </label>
          <input type="text" value={props.clientName} onChange={props.handleNameChange}/>
        </div>
        <div className="email">
          <label>Client Email: </label>
          <input type="email" value={props.clientEmail} onChange={props.handleEmailChange}/>
        </div>
        <div className="phone-num">
          <label>Client Phone Number: </label>
          <input type="text" value={props.clientPhoneNum} onChange={props.handlePhoneNumChange}/>
        </div>
        <br/>
        <div className="status">
          <label>Status:</label>
          <select id="status-select" value={props.status} onChange={props.handleStatusChange}>
              {Object.keys(props.statuses).map(status =>
                <option key={status} value={status}>
                  {props.statuses[status]}
                </option>
              )}
            </select>
        </div>
        <br/>
        <div>
          <Button id="add-job-button" variant="contained" type="submit">Add Job</Button>
        </div>
      </form>
    </div>
  )
}

export default JobForm;