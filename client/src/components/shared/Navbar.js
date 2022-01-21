import { AuthConsumer } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';

const Navbar = ({ user, handleLogout }) => {

  const rightNavItems = () => {
    // links will display when the user is logged in
    if (user) {
      return (
        <>
          <li onClick={ () => handleLogout() }>
            Logout
          </li>
        </>
      )
    } else {
      // links that will display when not login
      return (
        <>
          <Link to='/login'>
            <li>
              Login
            </li>
          </Link>
          <Link to='/register'>
            <li>
              register
            </li>
          </Link>
        </>
      )
    }
  }

  return (
    <>
      <nav>
        <ul>
          {/* these links here show up with or without the use being login */}
          <Link to="/">
            <li>
              Home
            </li>
          </Link>
          { rightNavItems() }
        </ul>
      </nav>
    </>
  )
}

const ConnectedNavbar = (props) => (
  <AuthConsumer>
    { value => <Navbar {...props} {...value} />}
  </AuthConsumer>
)

export default ConnectedNavbar;