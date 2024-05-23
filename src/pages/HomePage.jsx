import { useEffect, useState } from "react"
import { deleteMethod, getMethod, postMethod } from "../helper/tools"
import apiRoutes from "../helper/apiRoutes"
import { useNavigate } from "react-router-dom"
import axios from "axios"


export default function(){
    const [data,setData]  = useState([])
    const navigate = useNavigate()
    
    useEffect(()=>{
        getMethod(apiRoutes.AllUsers).then((res)=>{
            console.log('akjgsdkjagsdjashgdjhasd');
            console.log(res);
            console.log('akjgsdkjagsdjashgdjhasd');

           setData(res)
        })
    },[])

    function handleDelete(id){
         deleteMethod(apiRoutes.deleteUser(id)).then((res)=>{
            console.log(res);
            if(res.message === 'User deleted successfully'){
                window.location.reload()
               
               
            }
         }).catch(err=>console.log(err))
    }

    const handleLogOut=()=>{
       postMethod(apiRoutes.logoutUser).then((res)=>{
        console.log(res);
        if(res.message === 'Logged out successfully'){
            localStorage.removeItem('token')
            navigate('/signin')
            
        }
       }).catch(err=>console.log(`Error :${err}`))
    }
    const [searchQuery,setSearchQuery] = useState('')

    function handleSearch(){
        axios.get(`http://localhost:3001/search/user?query=${searchQuery}`).then((res)=>{
            console.log(res);
            setData(res.data)
        })
    }

     
    return(
        <>
           
           <h2 className="text-center">
            Home Page
           </h2>
         <div className="d-flex justify-content-center">
             <div  >
             <input value={searchQuery} onChange={(e)=>{setSearchQuery(e.target.value)}} type="search" placeholder="Search User" className="form-control w-100" /> 
            <button className="btn btn-primary  mb-5 mt-3" onClick={handleSearch}>
                Search User
            </button>
             </div>
         </div>
           <div className="row mx-0">
            {
                data.map((user,index)=>{
                    return(
                        <>
                        
                        <div className="col-md-4 card">
                            <h2>{user.name}</h2>
                            <h5>{user.email}</h5>
                            <h5>{user._id}</h5>

                           <button onClick={(e)=>{
                               handleDelete(user._id)
                           }} className="btn btn-danger">
                             delete
                           </button>
                        </div>
                        </>
                    )
                })
            }
           </div>
           <button onClick={handleLogOut} className="btn btn-warning" style={{
            position:'fixed',
            bottom:'20px',
            right:'20px'
           }}>
              Log out
           </button>
        </>
    )
}