import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';
import Job from './components/Job'
import JobForm from './components/JobForm'
import Divider from '@mui/material/Divider';
import moment from 'moment/moment';

function App() {
  const statuses = {
    Scheduled: "Scheduled",
    Active: "Active",
    Invoicing: "Invoicing",
    ToPriced: "To priced",
    Completed: "Completed"
  }

  const [jobs, setJobs] = useState([])
  const [jobTitle, setJobTitle] = useState('')
  const [clientName, setClientName] = useState('')
  const [clientEmail, setClientEmail] = useState('')
  const [clientPhoneNum, setClientPhoneNum] = useState('')
  const [clientStatus, setClientStatus] = useState(statuses.Scheduled)
  const [viewingTask, setViewingTask] = useState('')
  const [filter, setFilter] = useState('')
  
  useEffect(() => {
    axios
      .get('http://localhost:3001/jobs')
      .then(response => {
        setJobs(response.data)
      })
  }, [])
  console.log('render', jobs.length, 'jobs')

  const addJob = (event) => {
    event.preventDefault()
    const jobObject = {
      id: jobs.length + 1,
      jobTitle: jobTitle,
      creationDate: moment().format('MMMM Do YYYY, h:mm:ss a'),
      clientName: clientName,
      clientEmail: clientEmail,
      clientPhoneNum: clientPhoneNum,
      status: clientStatus,
      notes: []
    }

    setJobs(jobs.concat(jobObject))
    setJobTitle('')
    setClientName('')
    setClientEmail('')
    setClientPhoneNum('')
    setClientStatus(statuses.Scheduled)
    console.log(jobs)
  }

  const handleJobNoteAdd = (note) => {
    let index = jobs.findIndex(index => index.id === viewingTask.id)
    let updatedJobs = [...jobs]
    updatedJobs[index].notes.push(note)
    setJobs(updatedJobs)
  }

  const handleJobNoteEdit = (note) => {
    let index = jobs.findIndex(index => index.id === viewingTask.id)
    let updatedJobs = [...jobs]
    updatedJobs[index].notes[viewingTask.id] = note
  }

  const handleTitleChange = (event) => {
    setJobTitle(event.target.value)
  }

  const handleNameChange = (event) => {
    setClientName(event.target.value)
  }

  const handleEmailChange = (event) => {
    setClientEmail(event.target.value)
  }

  const handlePhoneNumChange = (event) => {
    setClientPhoneNum(event.target.value)
  }

  const handleStatusChange = (event) => {
    setClientStatus(event.target.value)
  }

  const handleShowViewingTaskChange = (value) => {
    setViewingTask(value)
  }

  return (
    <div className="App">
      <div className="app-title">
        <h1>Job Management Application</h1>
      </div>
      <JobForm
        addJob={addJob}
        jobTitle={jobTitle}
        clientName={clientName}
        clientEmail={clientEmail}
        clientPhoneNum={clientPhoneNum}
        status={clientStatus}
        statuses={statuses}
        handleTitleChange={handleTitleChange}
        handleNameChange={handleNameChange}
        handleEmailChange={handleEmailChange}
        handlePhoneNumChange={handlePhoneNumChange}
        handleStatusChange={handleStatusChange}
      />

      {viewingTask != '' &&
        <div className="viewing-task">
          <Job
            key={viewingTask}
            id={viewingTask.id}
            jobTitle={viewingTask.jobTitle}
            creationDate={viewingTask.creationDate}
            clientName={viewingTask.clientName}
            clientEmail={viewingTask.clientEmail}
            clientPhoneNum={viewingTask.clientPhoneNum}
            status={viewingTask.status}
            statuses={statuses}
            notes={viewingTask.notes}
            handleJobNoteAdd={handleJobNoteAdd}
            handleShowViewingTaskChange={handleShowViewingTaskChange}
          />
        </div>
      }


      <div className="job-list">
        <h2>Job List</h2>
        <Divider variant="middle" />
        <br/>
        <table>
          <tbody>
            <tr>
              <th>ID</th>
              <th>Job Title</th>
              <th>Client Name</th>
              <th>Creation Date</th>
              <th>Status</th>
              <th id="view-buttons"></th>
            </tr>
            {jobs.map((job) =>
              <tr key={job.id}>
                <td>{job.id}</td>
                <td>{job.jobTitle}</td>
                <td>{job.clientName}</td>
                <td>{job.creationDate}</td>
                <td>{statuses[job.status]}</td>
                <td><button onClick={() => handleShowViewingTaskChange(job)}>View</button></td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
