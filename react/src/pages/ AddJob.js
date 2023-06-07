
import { useContext, useState } from "react"
import { AuthContext } from "../context/AuthContext"
import { JobContext } from "../context/JobContext"

export default function AddJob() 
{
    const {current_user} = useContext(AuthContext)
    const {AddJob} = useContext(JobContext)

    const [title, setTitle] = useState()
    const [description, setDescription] = useState()

    const  handleSubmit = (e) =>{
        e.preventDefault()

        AddJob(title, description, current_user.id)
    }
  return (
    <div className="container" style={{"minHeight":"50vh"}}>
        {current_user && current_user?
        <>
        <h3>Add Blog</h3>
        <div className="row h-full">
            <div className="col-md-6">
            </div>
            <div className="col-md-6">
            <form onSubmit={handleSubmit}>
                <div class="form-group mt-3">
                    <label >Title</label>
                    <input type="text" onChange={e=> setTitle(e.target.value)} class="form-control"  aria-describedby="emailHelp" placeholder="Enter Title" />
                </div>
                
                <div class="form-group mt-3">
                    <label for="exampleInputEmail1">Description</label>
                    <textarea type="text" onChange={e=> setDescription(e.target.value)} class="form-control"  aria-describedby="emailHelp" placeholder="Enter Title" />
                </div>

                <button type="submit" class="btn mt-3 btn-success">Submit</button>
                </form>
            </div>
        </div>
        </>
        :
       <div>
        Please login to add a job
       </div>
        }
    </div>
  )
}