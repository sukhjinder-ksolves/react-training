import Link from "next/link";
import { useSelector } from 'react-redux'

export default function ProjectList () {
    const projects = useSelector((state) => state.projects.value)

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
                    {projects.map((project, index) => 
                        <li className="mb-4"   key={index} >
                            <span style={{fontSize: 18 , fontWeight: 600}} >{project.name}</span>
                            <span style={{fontSize: 15 }} className="w-100 d-block text-danger" >
                                Deadline: {project.deadline}
                            </span>
                        </li>
                    )}
                </ul>
                <Link href="/add-project" className="btn btn-primary btn-lg rounded-0 mt-4" >Add New Projects</Link>
                </>
            }
        </div>
    ) 
}