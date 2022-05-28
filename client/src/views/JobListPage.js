// module yang diimport
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import fetchData from "../store/fetchJobAction";
import fetchOneData from "../store/fetchOneJobAction";

// component yang diimport
import { Table, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function JobListPage() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    // global state untuk jobs
    const { jobs } = useSelector(function (state) {
        return state.jobReducer
    })
    useEffect(() => {
        dispatch(fetchData())
    }, [])
    // local state untuk search
    const [search, setSearch] = useState({})

    // search job handler
    function searchJob(e){
        e.preventDefault()
        dispatch(fetchData(search))
    }

    //detail job handler
    function toDetail(id){
        dispatch(fetchOneData(id))
        navigate(`/jobs/${id}`)
    }
    return (
        <div >
            <form onSubmit={searchJob} className="container mt-3 mb-3 d-flex ">
                <input onChange={e => setSearch({ ...search, description: e.target.value })} className="me-3" placeholder="Description" />
                <input onChange={e => setSearch({ ...search, location: e.target.value })} className="me-3" placeholder="Location" />
                <div className="me-3">
                    <input onChange={e => setSearch({ ...search, full_time: e.target.value })} className=" form-check-input me-1" type="checkbox" id="full_time_only" name="full_time_only" value={'true'} />
                    <label className="form-check-label" for="full_time_only">Full Time Only</label>
                </div>
                <button type="submit">Search</button>
            </form>
            <Table className="container" striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Title</th>
                        <th>Company</th>
                        <th>Type</th>
                        <th>Location</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        jobs.map((e, i) => {
                            return (
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>{e.title}</td>
                                    <td>{e.company}</td>
                                    <td>{e.type}</td>
                                    <td>{e.location}</td>
                                    <td ><Button onClick={()=>{toDetail(e.id)}}>Detail</Button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    )
}

//onClick={()=>{toDetail(e.id)}}