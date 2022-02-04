import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Moment from 'react-moment';
import { Button } from 'react-bootstrap';
import { JobConsumer } from '../../providers/JobProvider';
import JobForm from './JobForm';

 const JobShow = ({ updateJob, deleteJob}) => {
   const params = useParams();
   const [job, setJob] = useState({ company: '', title: '',    location: '', startApply: '', description: '', status: '', salary: '', endApply: ''})
   const [editing, setEdit] = useState(false)

   useEffect( () => {
     axios.get(`/api/jobs/${params.jobId}`)
       .then( res => setJob(res.data))
       .catch( err => console.log(err))
   }, [])

   const { company, title, startApply, location, description, status, salary, endApply, id  } = job
   return (
     <>
       { editing ? 
         <>
           <JobForm 
             {...job}
             updateJob={updateJob}
           />
           <Button variant="warning" onClick={() => setEdit(false)}>Cancel</Button>
           <br />
         </>
         :
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
             <h5>Date Ended:
               <Moment format='MM/DD/YYYY'>
                 {endApply}
               </Moment> 
             </h5>
           <Button variant="warning" onClick={() => setEdit(true)}>Edit</Button>

            <Button 
            variant="danger" onClick={() => deleteJob(id)}
            >Delete Job
          </Button>
         </>
       }
     </>
   )
 }

 const ConnectedJobShow = (props) => (
   <JobConsumer>
     { value => <JobShow {...props} {...value} /> }
   </JobConsumer>
 )

 export default ConnectedJobShow;
