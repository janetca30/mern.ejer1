import Nav from '../Nav'
import Login from '../Login'
import Logo from '/Images/logo.png'
import { useSelector } from 'react-redux'
import Logout from '../Logout'
import './style.css'

function Header () {

  const login = useSelector(state => state.userReducer.login)
  return (
    <>
      <header >
        <div className='header-container'>
          <img src={Logo} className='logotravel '/>
          <Nav /> 
          {
            login ?
            <Logout /> :
            <Login />
          } 
          
        </div>
      </header>
    </>
  )
}

export default Header;


