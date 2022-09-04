import { useState } from 'react'
import { v4 as uuid } from 'uuid';
import './App.css';
import Job from './components/Job'

function App() {
  const emptyJob = {
    id: null,
    creationDate: null,
    clientName: null,
    clientEmail: null,
    clientPhone: null,
  }

  const [jobs, setJobs] = useState([])
  const [newName, setNewName] = useState('')
  const [newEmail, setNewEmail] = useState('')
  const [newPhoneNum, setNewPhoneNum] = useState('')
  const [filter, setFilter] = useState('')
  
  const addJob = (event) => {
    event.preventDefault()
    const jobObject = {
      id: uuid(),
      creationDate: new Date().toISOString(),
      clientName: newJob.clientName,
      clientEmail: newJob.clientEmail,
      clientPhoneNum: newJob.clientPhoneNum
    }

    setJobs(jobs.concat(jobObject))
    setNewName('')
    setNewEmail('')
    setNewPhoneNum('')
  }

  return (
    <div className="App">
      <JobForm
        addJob={addJob}
        clientName={newName}
        clientemail={newEmail}
        clientPhoneNum={newPhoneNum}
      />
      <div className="job-list">
        <h1>Job List</h1>
      </div>
    </div>
  );
}

export default App;
