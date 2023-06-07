
import {createContext, useEffect, useState} from "react"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"

export const JobContext = createContext()

export function JobProvider({children}) 
{
  const nav = useNavigate()
  const [onchange, setonchange] = useState(false)
  const [jobs, setJobs] = useState()

   // AddJob
   const AddJob = (title, content, userid) =>{
    fetch("/jobs/addjob", {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({title:title, content:content, user_id:userid})
    })
    .then((res)=>res.json())
    .then((response)=>{
        console.log(response)
        if(response.error)
        {
            Swal.fire(
                'Error',
                response.error,
                'error'
              )
        }
        else if(response.success)
        { 
            nav("/")
            Swal.fire(
                'Success',
                response.success,
                'success'
              )
              setonchange(!onchange)
        }
        else{
            Swal.fire(
                'Error',
                "Something went wrong",
                'error'
              )
        }

    })
}
  // Delete Job
  const deleteJob = (id) =>{
    fetch(`/jobs/delete/${id}`, {
        method: "DELETE",
    })
    .then((res)=>res.json())
    .then((response)=>{
      setonchange(!onchange)
        console.log(response)
        nav("/")
        Swal.fire(
          'Success',
          "Delete success",
          'success'
        )
        nav("/")

    })

}

  // Fetch jobs
  useEffect(()=>{
    fetch("/jobs", {
        method: "GET",
        headers: {"Content-Type":"application/json"}
    })
    .then((res)=>res.json())
    .then((response)=>{
     setJobs(response)
        
    })
}, [onchange])


   const contextData = {
     jobs,
     deleteJob,
     AddJob
    }
  return (
    <JobContext.Provider value={contextData}>
       {children}
    </JobContext.Provider>
  )
}