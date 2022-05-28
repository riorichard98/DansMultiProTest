import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import fetchOneData from "../store/fetchOneJobAction";
import { useNavigate } from "react-router-dom";

export default function JobDetailPage() {
    const { id } = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { job } = useSelector(function (state) {
        return state.jobReducer
    })

    useEffect(() => {
        dispatch(fetchOneData(id))
    }, [])

    return (
        <div className='text-start container mt-2'>
            <button className='mb-2 mt-2' onClick={(e) => navigate(`/jobs`)}>Back</button>
            <div className='d-flex justify-content-between mb-3'>
                <div >
                <h3>location : {job.location}</h3>
                <h3>title : {job.title}</h3>
                <h4>company : {job.company}</h4>
                </div>
                <div >
                    <img src={job.company_logo} style={{
                        height:"300px",
                        width:"300px"
                    }}/>
                </div>
            </div>
            <div className='d-flex me-2'>
                <div dangerouslySetInnerHTML={{ __html: job.description }} />
            </div>
            <div>
                <div>
                    <h4>how to apply</h4>
                </div>
                <div dangerouslySetInnerHTML={{ __html: job.how_to_apply }} />
            </div>
        </div>
    )
}