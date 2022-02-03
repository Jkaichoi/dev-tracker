import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Moment from 'react-moment';

const JobShow = ({}) => {
  const params = useParams();
  const [job, setJob] = useState({ company: '', title: '',    location: '', startApply: '', description: '', status: '', salary: '', endApply: ''})

  useEffect( () => {
    axios.get(`/api/jobs/${params.jobId}`)
      .then( res => setJob(res.data))
      .catch( err => console.log(err))
  }, [])

  const { company, title, startApply, location, description, status, salary, endApply  } = job
  return (
    <>
      <h1>
          {/* Id: {params.jobId}  */}
            {company}</h1>
      <h3>Title: {title}</h3>
      <h5>Applied:
        <Moment format='MM/DD/YYYY'>
          {startApply}
        </Moment> 
      </h5>
      <p>Location:{location}</p>
      <p>Description:{description}</p>
      <p>Status:{status}</p>
      <p>Salary:${salary}/Hour</p>
      <h5>Applied:
        <Moment format='MM/DD/YYYY'>
          {endApply}
        </Moment> 
      </h5>
    </>
  )
}

export default JobShow;







