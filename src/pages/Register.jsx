import axios from "axios"
import { postMethod } from "../helper/tools"
import apiRoutes from "../helper/apiRoutes"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Register(){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate= useNavigate()

    function handleRegister(){
        postMethod(apiRoutes.auth.register,{name,email,password}).then((res)=>{
          localStorage.setItem('token1',res.token)
          navigate('/signin')
        }).catch((err)=>{
            console.log(err);
        })
    }
    return(
        <>
             <div className="container">

                    <div className="form">
                        <input onChange={(e)=>setName(e.target.value)} className="form-control" type="text" placeholder="Enter Your NAme" />
                        <input onChange={(e)=>setEmail(e.target.value)} className="form-control" type="email" placeholder="Enter Your Email" />
                        <input onChange={(e)=>setPassword(e.target.value)} className="form-control" type="password" placeholder="Enter Your Password" />
                        <button className="btn btn-primary mt-5 " onClick={handleRegister}>
                            Register
                        </button>
                    </div>
                
                </div>        
        </>
    )
}