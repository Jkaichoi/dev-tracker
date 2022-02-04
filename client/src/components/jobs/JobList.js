import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const JobList = ({ jobs, title }) => {
  return(
    <>
    <h2>{title}</h2>
      <ListGroup>
        { jobs.map( p => 
          <Link to={`/jobs/${p.id}`}>
            <ListGroup.Item>{p.company}</ListGroup.Item>
          </Link>
        )}
      </ListGroup>
    </>
  )
}

export default JobList;