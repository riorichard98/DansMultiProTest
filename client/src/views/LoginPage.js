// module yang diimport
import { useState } from "react";
import { useDispatch } from "react-redux";
import login from "../store/loginAction.js";
import swal from 'sweetalert'
import { useNavigate } from "react-router-dom";

// component yang diimport
import { Form, Button, Container } from "react-bootstrap"

export default function LoginPage() {
    // state e
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const loginReset = () => { 
        document.getElementById("login-form").reset();
      }
    const submitLogin = (e) => {
        e.preventDefault()
        dispatch(login(username, password))
            .then(resp => {
                // jika berhasil login akan diset tokennya
                localStorage.setItem('token',resp.data.token)
                swal('you are logged in')
                navigate('/jobs')
                loginReset()
            })
            .catch(err => {
                // jika gagal login akan ada notifikasi menggunakan swal
                if(err.message === 'Network Error'){
                    swal('please run the server and read readme file')
                }else{
                    swal(err.response.data.message)
                }
                loginReset() 
            })

    }

    return (
        <Container className="p-5 w-50 mt-5 d-flex justify-content-center">
            <Form id="login-form" className="w-50 p-4 rounded bg-grey">
                <Form.Group className="mb-3" >
                    <Form.Label>Username</Form.Label>
                    <Form.Control onChange={e => setUsername(e.target.value)} type="text" placeholder="Enter username" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" />
                </Form.Group>
                <Button onClick={submitLogin} variant="primary" type="submit">
                    Login
                </Button>
            </Form>
        </Container>
    )
}




