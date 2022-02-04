import { useEffect, useState } from 'react';
import { JobConsumer } from '../../providers/JobProvider';
import JobList from './JobList';
import { Button, Container, Row, Col, Modal } from 'react-bootstrap';
import JobForm from './JobForm';

const Jobs = ({ jobs, getAllJobs, addJob,wishlistJobs, appliedJobs, interviewJobs, offerJobs, rejectedJobs }) => {
  const [adding, setAdding] = useState(false)

  useEffect( () => {
    getAllJobs()
  }, [])

  return (
    <>
      <h1>All Jobs</h1>
     
      <Button variant="info" onClick={() => setAdding(true)}>Add Job</Button>
      <Modal show={adding} onHide={() => setAdding(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Job</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <JobForm addJob={addJob} /> 
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setAdding(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <br/>
      <br/>
      <br/>
      <Container>
        <Row>
          <Col>
            <JobList title='Wishlist' jobs={wishlistJobs} />
          </Col>
          <Col>
            <JobList title='Applied' jobs={appliedJobs} />
          </Col>
          <Col>
            <JobList title='Interview' jobs={interviewJobs} />
          </Col>
          <Col>
           <JobList title='Offer' jobs={offerJobs} />
          </Col>
          <Col>
            <JobList title='Rejected' jobs={rejectedJobs} />
          </Col>
        </Row>
      </Container>
    </>
  )
}

const ConnectedJob = (props) => (
  <JobConsumer>
    { value => <Jobs {...props} {...value} />}
  </JobConsumer>
)

export default ConnectedJob;