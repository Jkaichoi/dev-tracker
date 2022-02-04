import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

const JobForm = ({ addJob, id, company, title, location, startApply, description, status, salary, endApply,updateJob }) => {
  const [job, setJob] = useState({ company: '', title: '',    location: '', startApply: '', description: '', status: 'applied', salary: '', endApply: '' })

  useEffect( () => {
    if (id) {
      setJob({ company, title, location, startApply, description, salary, status, endApply })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
        updateJob(id,job)
      } else {
        addJob(job)
      }
    setJob(({ company: '', title: '', location: '', startApply: '', description: '', status: '', salary: '', endApply: '' }))
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
         <Form.Group className="mb-3" >
           <Form.Label>Company</Form.Label>
          <Form.Control 
            type="text"
            name="company"
            value={job.company}
            onChange={(e) => setJob({ ...job, company: e.target.value })} 
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control 
            type="text"
            name="title"
            value={job.title}
            onChange={(e) => setJob({ ...job, title: e.target.value })} 
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Date Applied</Form.Label>
          <Form.Control 
            type="date"
            name="startApply"
            value={job.startApply}
            onChange={(e) => setJob({ ...job, startApply: e.target.value })} 
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Location</Form.Label>
          <Form.Control 
            type="text"
            name="title"
            value={job.location}
            onChange={(e) => setJob({ ...job, location: e.target.value })} 
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control 
            type="text"
            name="title"
            value={job.description}
            onChange={(e) => setJob({ ...job, description: e.target.value })} 
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Salary</Form.Label>
          <Form.Control 
            type="text"
            name="title"
            value={job.salary}
            onChange={(e) => setJob({ ...job, salary: e.target.value })} 
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Status</Form.Label>
          
          <Form.Select onChange={(e) => setJob({ ...job, status: e.target.value })} name="status">
            <option value="wishlist">Wishlist</option>
            <option value="applied">Applied</option>
            <option value="interview">Interview</option>
            <option value="offer">Offer</option>
            <option value="rejected">Rejected</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Date Ended</Form.Label>
          <Form.Control 
            type="date"
            name="endApply"
            value={job.endApply}
            onChange={(e) => setJob({ ...job, endApply: e.target.value })} 
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <br />
    </>
  )
}

export default JobForm;