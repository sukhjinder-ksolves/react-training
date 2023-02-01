import Link from "next/link";
import { useSelector, useDispatch } from 'react-redux'
import { editProject, deleteProject } from '../store/slices/projectListSlice'
import { useState } from "react";

export default function ProjectList () {
    const projects = useSelector((state) => state.projects.value)
    const dispatch = useDispatch()
    const [editProjectId, setEditProjectId] = useState("");
    const [projectName, setProjectName] = useState("");
    const [projectDate, setProjectDate] = useState("");

    
    const handleEdit = (project) => {
        setEditProjectId(project.id)
        setProjectName(project.name)
        setProjectDate(project.deadline)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(editProject({ id: editProjectId, name: projectName, deadline: projectDate}))
        setEditProjectId("")
    }

    return(
        <div className="container p-5" >
            {
              !projects.length ? 
                <>
                    <h1>No Project Added</h1>
                    <Link href="/add-project" className="btn btn-primary btn-lg rounded-0 mt-4" >Add Projects</Link>
                </>  
                :
                <>
                <h1 className="mb-4" >Project List</h1>
                <ul>
                    {projects.map((project) => 
                        <li className="mb-4 d-flex align-items-center" key={ project.id } >
                            { editProjectId === project.id  ? 
                                <>
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
                                        <button type="submit" className="btn btn-lg btn-primary rounded-0 mt-3"  >Update Project</button>
                                    </form>
                                </>
                                :
                                <>
                                    <div>
                                        <span style={{fontSize: 18 , fontWeight: 600}} >{project.name}</span>
                                        <span style={{fontSize: 15 }} className="w-100 d-block text-danger" >
                                            Deadline: {project.deadline}
                                        </span>
                                    </div>
                                    <div className="ms-auto d-flex" >
                                        <button className="btn btn-outline-primary me-3" onClick={() => handleEdit(project)}  >Edit</button>
                                        <button className="btn btn-primary" onClick={()=> dispatch(deleteProject(project.id))} >Delete</button>
                                    </div>
                                </>
                            }
                        </li>
                    )}
                </ul>
                <Link href="/add-project" className="btn btn-primary btn-lg rounded-0 mt-4" >Add New Projects</Link>
                </>
            }
        </div>
    ) 
}