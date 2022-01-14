import { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {Link} from 'react-router-dom';


function MainNavBar({ match }) {

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

        <div class="dropdown">
        <button id="main-navbar" type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown">
            Главная
        </button>
        {posts.map(p => (
            <ul class="dropdown-menu" aria-labelledby="main-navbar">
                <div className="col">
                    <li><a class="dropdown-item" href="#">{p.key}</a></li>
                </div>
            </ul>
            ))}
        </div>
  );
}

export default MainNavBar;
