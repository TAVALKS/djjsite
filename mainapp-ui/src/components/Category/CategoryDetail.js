import React, {useEffect, useState, useRef} from 'react';
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
                    <div className="row-md-4" key={p.id}>
                        {p.in_archive == false &&
                        <div className="d-grid gap-1 col-6 mx-auto">
                            <div className="row">
                               <div className="col">
                                    <h4>{p.title}</h4>
                                    <p>{p.content}</p>
                                    {p.audio != null &&
                                    <audio controls>
                                        <source src={p.audio} type="audio/mp3" />
                                    </audio>}
                                    {p.video != null && <iframe src={p.video} width="560" height="315" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>}
                                </div>
                                <div className="col">
                                    <img src= {p.image} className="center" />
                                </div>
                            </div>
                            <Link to={{ pathname: `/posts/${p.id}`, fromDashboard: false }}>
                                <div className="d-grid gap-2 col-12 mx-auto">
                                    <button className="btn btn-primary" type="button">Детали</button>
                                </div>
                                <hr />
                            </Link>
                        </div>}
                </div>
                ))}
        </div>
    </div>
    );
}


export default CategoryDetail;
