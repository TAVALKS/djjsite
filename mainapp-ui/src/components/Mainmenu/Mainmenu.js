import { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {Link} from 'react-router-dom';

function MainNavBar() {

    const [categories, setCategories] = useState([])

    useEffect(()=>{
        axios({
            method: "GET",
            url: 'http://127.0.0.1:8080/api/category/'
        }).then(response => {
            setCategories(response.data)
        })
    }, [])

    return (

        <div class="dropdown">
        <button id="main-navbar" type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown">
            Главная
        </button>
            <ul class="dropdown-menu" aria-labelledby="main-navbar">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
        </div>
  );
}

export default MainNavBar;
