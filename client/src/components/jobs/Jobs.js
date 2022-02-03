import { useEffect, useState } from 'react';
import { JobConsumer } from '../../providers/JobProvider';
import JobList from './JobList';
import { Button } from 'react-bootstrap';
import JobForm from './JobForm';

const Jobs = ({ jobs, getAllJobs, addJob }) => {
  const [adding, setAdding] = useState(false)

  useEffect( () => {
    getAllJobs()
  }, [])

  return (
    <>
      <h1>All Jobs</h1>
      { adding ?
          <>
            <JobForm addJob={addJob} />
            <Button variant="info" onClick={() => setAdding(false)}>Cancel</Button>
          </>
        :
        <Button variant="info" onClick={() => setAdding(true)}>+</Button>
      }
      <JobList jobs={jobs} />
    </>
  )
}

const ConnectedJob = (props) => (
  <JobConsumer>
    { value => <Jobs {...props} {...value} />}
  </JobConsumer>
)

export default ConnectedJob;