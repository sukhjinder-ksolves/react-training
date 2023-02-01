import { useDispatch } from 'react-redux'
import { addProject } from '../store/slices/projectListSlice'
import { useState, useId } from 'react'
import { useRouter } from 'next/router'

export default function AddProject () {
    const dispatch = useDispatch()
    const [projectName, setProjectName] = useState("");
    const [projectDate, setProjectDate] = useState("");
    const router = useRouter()
    const id = useId()

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addProject({ id, name: projectName, deadline: projectDate }));
        router.push('/project-list')
    }

    return(
        <main className="container p-5" > 
            <h1 className="mb-4" >Add Your Projects</h1>
            <form onSubmit={handleSubmit} className="col-6" >
                <div className="form-floating mb-3">
                    <input 
                        required 
                        type="text" 
                        className="form-control" 
                        id="floatingInput" 
                        placeholder="FTC" 
                        value={projectName}
                        onChange={(e) => setProjectName(e.target.value) }
                    />
                    <label htmlFor="floatingInput">Project Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input 
                        required 
                        type="date" 
                        className="form-control" 
                        id="projectDateId" 
                        placeholder="Deadline" 
                        value={projectDate}
                        onChange={(e) => setProjectDate(e.target.value) }
                    />
                    <label htmlFor="projectDateId">Project Deadline</label>
                </div>
                <button type="submit" className="btn btn-lg btn-primary rounded-0 mt-3"  >Add Project</button>
            </form>
        </main>
    ) 
}