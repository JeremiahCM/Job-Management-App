import { useState } from 'react'
import '../styles/JobForm.css';

const JobForm = (props) => {
  return (
    <div>
      <form onSubmit={props.addJob}>
        <h1>Create New Job</h1>
        <div className="name">
          Client Name: <input value={props.clientName} onChange={props.handleNameChange}/>
        </div>
        <div className="email">
          Client Email: <input value={props.clientEmail} onChange={props.handleEmailChange}/>
        </div>
        <div className="phoneNum">
          Client Phone Number: <input value={props.clientPhoneNum} onChange={props.handlePhoneNumChange}/>
        </div>
        <div className="status">
          <label>
            Status
            <select value={props.status} onChange={props.handleStatusChange}>
              {Object.keys(props.statuses).map(status =>
                <option key={status} value={status}>
                  {props.statuses[status]}
                </option>
              )}
            </select>
          </label>
        </div>
        <div>
          <button type="submit">Add Job</button>
        </div>
      </form>
    </div>
  )
}

export default JobForm;