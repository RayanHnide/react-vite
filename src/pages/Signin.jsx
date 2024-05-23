import { useState } from "react"
import { postMethod } from "../helper/tools"
import apiRoutes from "../helper/apiRoutes"
import { useNavigate } from "react-router-dom"

export default function(){
    const navigate= useNavigate()
    const [formData ,setFormData] = useState({
        email:'',
        password:''
    }) 
    function handleChange(e){
         setFormData(
            {
                ...formData,
                [e.target.name]:e.target.value
            }
         )
    }

    const handleSignin= ()=>{
       postMethod(apiRoutes.auth.login,formData).then((res)=>{
       console.log(res);
        if(res.token){
            localStorage.setItem('token1',res.token)
            navigate('/home')
        }
       }).catch((err)=>{
        console.log(`the error is : ${err}`);
       })
    }


    return(
        <>

<div className="container">

<div className="form">
     <input name="email" onChange={handleChange} className="form-control" type="email" placeholder="Enter Your Email" />
    <input name="password" onChange={handleChange} className="form-control" type="password" placeholder="Enter Your Password" />
    <button className="btn btn-primary mt-5 " onClick={handleSignin}   >
        Sign in
    </button>
</div>
           
           
</div>  
        
         </>
    )
}