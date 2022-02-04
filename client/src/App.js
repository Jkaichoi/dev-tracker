
import { Routes, Route } from 'react-router-dom';
import Home from './components/shared/Home';
import Nomatch from './components/shared/Nomatch';
import { Container } from 'react-bootstrap';
import MainNavbar from './components/shared/MainNavbar';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import FetchUser from './components/auth/FetchUser';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Jobs from './components/jobs/Jobs';
import JobShow from './components/jobs/JobShow';

const App = () => (
  <>
    <MainNavbar />
    <FetchUser>
      <Container>
        <>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/' element={<ProtectedRoute />}>
              {/* <Route path='/profile' element={<Profile />} /> */}
              <Route path='/jobs' element={<Jobs />} />
              <Route path='/jobs/:jobId' element={<JobShow />} />
            </Route>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/*' element={<Nomatch />} />
          </Routes>
        </>
      </Container>
    </FetchUser>
  </>
)

export default App;