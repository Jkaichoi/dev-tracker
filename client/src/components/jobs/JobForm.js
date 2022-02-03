import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

const JobForm = ({ addJob }) => {
  const [job, setJob] = useState({ company: '', title: '',    location: '', startApply: '', description: '', status: '', salary: '', endApply: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    addJob(job)
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
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <br />
    </>
  )
}

export default JobForm;