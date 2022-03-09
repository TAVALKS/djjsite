import React, {useEffect, useState} from 'react';
import axios from 'axios';


function RecordDetail({ match }) {

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
        Records {record.id}
        Title {record.title}
        Detail {record.record_detail}
        </div>
    )
}


export default RecordDetail;
