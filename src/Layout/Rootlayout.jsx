import { NavLink, Outlet } from "react-router-dom";
import '../App.css'

export default function (){
    return(
        <>
        
              <nav>
                <ul>
                    <li>
                        <NavLink>Register</NavLink>
                    </li>

                   

                    <li>
                        <NavLink>users</NavLink>
                    </li>

                    <li>
                        <NavLink  to='about'>About us</NavLink>
                    </li>

                    <li>
                        <NavLink  to='/setting'>Setting</NavLink>
                    </li>
                </ul>
              </nav>


              <div  >
                <Outlet/>
              </div>
        </>
    )
}