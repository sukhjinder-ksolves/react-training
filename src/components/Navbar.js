import Link from "next/link"
import { useRouter } from "next/router";

const Navbar = () => {
    const router = useRouter();

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand" href="/">React Practice</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" style={{ flex: 'none' }} id="navbarNav">
                    <ul className="navbar-nav gap-4">
                        <li className="nav-item">
                            <Link className={`nav-link ${router.pathname == '/' ? 'active' : ''}`} aria-current="page" href="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${router.pathname == '/project-list' ? 'active' : ''}`} aria-current="page" href="/project-list">Projects List</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${router.pathname == '/add-project' ? 'active' : ''}`} aria-current="page" href="/add-project">Add Project</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;