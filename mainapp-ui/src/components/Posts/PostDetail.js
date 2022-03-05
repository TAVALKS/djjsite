import React, {useEffect, useState} from 'react';
import axios from 'axios';


function PostDetail({ match }) {

    const [record, setRecord] = useState({})
    const id = match.params.id

    useEffect(() =>{
        axios({
            method: "GET",
            url: `http://127.0.0.1:8080/api/record/${id}/`
        }).then(response =>{
            setRecord(response.data)
        })
    }, [id])

    return (
        <div>
            Post with id {record.id}
            <p>Title <strong>{record.title}</strong></p>
        </div>
    )
}


export default PostDetail;
