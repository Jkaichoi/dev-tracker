import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const JobContext = React.createContext();
export const JobConsumer = JobContext.Consumer;

const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState([])

  const getAllJobs = () => {
    axios.get('/api/jobs')
      .then( res => setJobs(res.data) )
      .catch( err => console.log(err) )
  }

  const addJob = (job) => {
    axios.post('/api/jobs', { job })
      .then( res => setJobs([...jobs, res.data]))
      .catch( err => console.log(err) )
  }
 
  return (
    <JobContext.Provider value={{
      jobs,
      getAllJobs: getAllJobs,
      addJob: addJob, 
    }}>
      { children }
    </JobContext.Provider>
  )
}

export default JobProvider;