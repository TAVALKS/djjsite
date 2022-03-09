import React, {useEffect, useState} from 'react';
import axios from 'axios';


function RecordDetail({ match }) {

    const [records, setRecords] = useState({})
    const id = match.params.id

    useEffect(() =>{
        axios({
            method: "GET",
            url: `http://127.0.0.1:8080/api/record/${id}/`
        }).then(response =>{
            setRecords(response.data)
        })
    }, [id])

    return (
        <div>
        </div>
    )
}


export default RecordDetail;
