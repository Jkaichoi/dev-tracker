import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const JobContext = React.createContext();
export const JobConsumer = JobContext.Consumer;

const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState([])
  const [wishlistJobs, setWishlistJobs] = useState([])
  const [appliedJobs, setAppliedJobs] = useState([])
  const [interviewJobs, setInterviewJobs] = useState([])
  const [offerJobs, setOfferJobs] = useState([])
  const [rejectedJobs, setRejectedJobs] = useState([])

  const navigate = useNavigate()

  const getAllJobs = () => {
    axios.get('/api/jobs')
      .then( res =>{ 
          setJobs(res.data)
          setWishlistJobs(res.data.filter(j => j.status === 'wishlist'))
          setAppliedJobs(res.data.filter(j => j.status === 'applied'))
          setInterviewJobs(res.data.filter(j => j.status === 'interview'))
          setOfferJobs(res.data.filter(j => j.status === 'offer'))
          setRejectedJobs(res.data.filter(j => j.status === 'rejected'))
      })
      .catch( err => console.log(err) )
  }

  const addJob = (job) => {
    axios.post('/api/jobs', { job })
      .then( res => {
          setJobs([...jobs, res.data])
          window.location.href = '/jobs'
      } )
      .catch( err => console.log(err) )
    }

  const updateJob = (id, job) => {
    axios.put(`/api/jobs/${id}`, { job })
      .then( res => {
        const newUpdatedJobs = jobs.map( p => {
          if (p.id === id) {
            return res.data
          }
          return p
        })
        setJobs(newUpdatedJobs)
        navigate('/jobs')
      })
      .catch( err => console.log(err) )
  }

  const deleteJob = (id) => {
    axios.delete(`/api/jobs/${id}`)
      .then( res => {setJobs(jobs.filter( p => p.id !== id))
        alert(res.data.message)
        navigate('/jobs')

      })
      .catch( err => console.log(err) )
  }
// These are all the crud actions
  return (
    <JobContext.Provider value={{
      jobs,
      wishlistJobs, 
      appliedJobs,
      interviewJobs,
      offerJobs,
      rejectedJobs,
      getAllJobs: getAllJobs,
      addJob: addJob,
      updateJob: updateJob,
      deleteJob: deleteJob,
    }}>
      { children }
    </JobContext.Provider>
  )
}

export default JobProvider;
