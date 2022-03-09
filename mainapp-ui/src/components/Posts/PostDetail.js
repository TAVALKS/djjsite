import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';


function PostDetail({ match }) {

    const [post, setPost] = useState({})
    const [records, setRecords] = useState([])
    const id = match.params.id

    useEffect(() =>{
        axios({
            method: "GET",
            url: `http://127.0.0.1:8080/api/blogpost/${id}/`
        }).then(response =>{
            setPost(response.data)
            setRecords(response.data.records)
        })
    }, [id])

    return (
        <div>
            <hr />
            <div className="row justify-content-md-center">
                {records.map(r => (
                    <div className="row-md-4" key={r.id}>
                        <div className="d-grid gap-1 col-6 mx-auto">
                            <div className="row">
                               <div className="col">
                                    <h4>{r.title}</h4>
                                    <p>{r.record_detail}</p>
                                    {r.audio != null &&
                                    <audio controls>
                                        <source src={r.audio} type="audio/mp3" />
                                    </audio>}
                                    <Link to={{ pathname: `/records/${r.id}`, fromDashboard: false }}>
                                        <div className="d-grid gap-2 col-12 mx-auto">
                                            <button className="btn btn-primary" type="button">Детали</button>
                                        </div>
                                        <hr />
                                    </Link>
                                </div>
                            </div>
                        </div>
                </div>
                ))}
        </div>
    </div>
    );
}


export default PostDetail;
