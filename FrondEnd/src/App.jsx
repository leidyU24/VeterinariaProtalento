import { useState } from 'react'
import './App.css'
import MiHeader from './components/Header/header'
import MiFooter from './components/Footer/footer'
import MenuAppointmente from './components/Main/MenuAppointmente/MenuAppointmente'
import {Nav,NavItem,NavLink} from 'reactstrap';
import { Outlet } from 'react-router-dom' 

function App() {
  const [count, setCount] = useState(0)

  return (
    <><Nav>
        <MiHeader/>
        
      </Nav>
      <Outlet/>
      <Footer>
        <MiFooter/>
      </Footer>
    </>
  )
}

export default App
