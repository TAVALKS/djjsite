import React, {useEffect, useState} from 'react';
import axios from 'axios';


function PostDetail({ match }) {

    const [post, setPost] = useState({})
    const [records, setRecord] = useState([])
    const id = match.params.id

    useEffect(() =>{
        axios({
            method: "GET",
            url: `http://127.0.0.1:8080/api/blogpost/${id}/`
        }).then(response =>{
            setPost(response.data)
            setRecord(response.data.records)
        })
    }, [id])

    return (
        <div>
            {records.map(r => (
              <div>
                Post with id {r.id}
                <p>Title <strong>{r.title}</strong></p>
                <p>Title <strong>{r.record_detail}</strong></p>
              </div>
              ))}
        </div>
    )
}


export default PostDetail;
