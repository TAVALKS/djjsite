import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';


function CategoryDetail({ match }) {

    const [category, setCategory] = useState({})
    const [posts, setPosts] = useState([])
    const id = match.params.id

    useEffect(() => {
        axios({
            method: "GET",
            url: `http://127.0.0.1:8080/api/category/${id}/`
        }).then(response => {
            setCategory(response.data)
            setPosts(response.data.posts)
        })
    }, [id])

    return (
        <div>
            <hr />
            <div className="row justify-content-md-center">
                {posts.map(p => (
                    <div className="col-md-4" key={p.id}>
                        <div className="d-grid gap-2 col-6 mx-auto">
                            <h4>{p.title}</h4>
                            <p>{p.content}</p>
                            <p>{p.id}</p>
                            <img src= {p.image} alt={p.title} class="center" />
                        </div>
                    <Link to={{ pathname: `/posts/${p.id}`, fromDashboard: false }}>
                        <div className="d-grid gap-2 col-6 mx-auto">
                            <button className="btn btn-primary" type="button">Детали</button>
                        </div>
                    </Link>
            </div>
                ))}
        </div>
    </div>
    );
}


export default CategoryDetail;