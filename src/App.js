import { useState } from 'react'
import './App.css';
import Job from './components/Job'
import JobForm from './components/JobForm'

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
  const [filter, setFilter] = useState('')

  const addJob = (event) => {
    event.preventDefault()
    const jobObject = {
      id: jobs.length + 1,
      jobTitle: jobTitle,
      creationDate: new Date().toISOString(),
      clientName: clientName,
      clientEmail: clientEmail,
      clientPhoneNum: clientPhoneNum,
      status: clientStatus
    }

    setJobs(jobs.concat(jobObject))
    setJobTitle('')
    setClientName('')
    setClientEmail('')
    setClientPhoneNum('')
    setClientStatus(statuses.Scheduled)
    console.log(jobs)
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

  return (
    <div className="App">
      <JobForm
        addJob={addJob}
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
      <div className="job-list">
        <h1>Job List</h1>
        {jobs.map((job) =>
          <Job
            key={job.id}
            id={job.id}
            jobTitle={job.jobTitle}
            creationDate={job.creationDate}
            clientName={job.clientName}
            clientEmail={job.clientEmail}
            clientPhoneNum={job.clientPhoneNum}
            status={job.status}
            statuses={statuses}
          />
        )}
      </div>
    </div>
  );
}

export default App;
