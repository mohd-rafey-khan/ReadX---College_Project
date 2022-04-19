import React from "react";
import {BrowserRouter as Router, Link, Routes, Route} from "react-router-dom";
import "./css/Header.css";
import Home from "../Pages/Home";
import Discuss from "../Pages/Discuss";
import IndDiscuss from "../Pages/IndDiscuss";
import Login from "../Pages/Login";

export default ()=>{
    return(
        <> 
        <Router>
            <div class="">
            <nav className="allfixed navbar navbar-expand-lg navbar-light" >
                <div className="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <a class="navbar-brand" href="/">Read X</a>
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                        <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                        {/* <a class="nav-link" href="#">Link</a> */}
                        <Link class="nav-link active" aria-current="page" to="/discuss">Discuss Forum</Link>
                        </li>
                    </ul>
                    <form class="d-flex search-bar">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    <Link class="nav-link" to="/login">Login..</Link>
                    {/* <a class="nav-link" href="#">Login..</a> */}
                    <a class="nav-link" href="#">Register ..</a>
                    </div>
                </div>
            </nav>
            <div class="books-content">
                <div class="back-img-book"></div>
            </div>
            <div class="head-vis">
                <h1>Read X</h1>
            </div>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/discuss" element={<Discuss/>} /> 
                <Route path="/discuss/:id" element={<IndDiscuss/>}></Route>
                <Route path="/login" element={<Login/>}/>
                <Route path="*" element={<Home/>} />
            </Routes>
            </div>
        </Router>
        </>
    );
}