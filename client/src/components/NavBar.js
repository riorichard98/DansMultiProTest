// module yang diimport
import { Navbar, Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert'

export default function NavBar() {
    const navigate = useNavigate()

    // function logout terdapat pada tombol logout dinavbar meng-clear token yang di local storage
    const logout = (e) => {
        e.preventDefault()
        localStorage.clear()
        swal('you are logged out') //swal untuk ui notification
        navigate('/login')
    }
    return (
        <Navbar className="ms-3" bg="light" expand="lg">
            <Navbar.Brand href="#home">Github Jobs</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    {/* ternary untuk mengetahui apakah user sudah login atau belum */}

                    {   localStorage.token?
                        <a onClick={logout} className="nav-link active" href="" to="/login">Logout</a>
                        : <a></a>
                        }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}