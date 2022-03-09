import React, {useEffect, useState} from 'react';
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
      {records.map(r => (
        r.record_detail
      ))}
      </div>
    )
}


export default PostDetail;
