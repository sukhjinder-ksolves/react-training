import { useDispatch } from 'react-redux'
import { addProjectName } from '../store/slices/projectListSlice'
import { useRef } from 'react'
import { useRouter } from 'next/router'

export default function AddProject () {
    const dispatch = useDispatch()
    const projectNameInput = useRef(null);
    const projectDateInput = useRef(null);
    const router = useRouter()

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addProjectName({name: projectNameInput.current.value, deadline: projectDateInput.current.value}));
        router.push('/project-list')
    }

    return(
        <main className="container p-5" > 
            <h1 className="mb-4" >Add Your Projects</h1>
            <form onSubmit={handleSubmit} className="col-6" >
                <div className="form-floating mb-3">
                    <input required ref={projectNameInput} type="text" className="form-control" id="floatingInput" placeholder="FTC" />
                    <label htmlFor="floatingInput">Project Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input required ref={projectDateInput} type="date" className="form-control" id="projectDateId" placeholder="FTC" />
                    <label htmlFor="projectDateId">Project Deadline</label>
                </div>
                <button type="submit" className="btn btn-lg btn-primary rounded-0 mt-3"  >Add Project</button>
            </form>
        </main>
    ) 
}