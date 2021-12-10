import { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';

function Navbar() {

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
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#" ></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Главная</a>
                        </li>
                        {categories.map(c =>(
                            <Link className="nav-link" to={{pathname: `/category/${c.id}/`, fromDashboard: false}}>{c.name}</Link>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
  );
}

export default Navbar;
