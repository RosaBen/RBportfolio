import { Link } from "react-router-dom"
// import Toggle from './Toggle'
import sun from '../assets/images/sun.svg'
import moon from '../assets/images/moon.svg'
// import { useState } from "react"
export default function Navbar(props){
  // const [dark,setDark]=useState(null)
  // setClassName={toggleClass} toggleTheme={toggleTheme}
const toggleBtn = props.isDark ?
<img src={sun} className="icon" alt="Light mode" />:
<img src={moon} className="icon" alt="Dark mode"/>

// console.log('isDark',props.isDark)
  return (
    <nav>
                  <div className="landing_text">
                <h1 className="landing_name">Rosa Benchabane</h1>
                <h2 className="landing_title">Full Stack Web Developer</h2>
                </div>
      <div className="nav-container">
            <div className="navbar-links">
      <Link to ="/" className="nav_button">Home</Link>
    <Link to ="/projects" className="nav_button">Projects</Link></div>
    {/* <Toggle setClassName ={props.setClassName}/> */}
    <div className="navbar-theme" onClick={props.toggleTheme} >
    {toggleBtn}
    </div>
      </div>
    </nav>
  )
}