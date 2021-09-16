import React, { Component } from 'react'
//import styled from 'styled-components';

export default class NavBar extends Component {
    render(){
        return(
            <div>
                <div>
                <nav className = "navbar navbar-expand-md navbar-dark bg-dark fixed-top">
                    <img src="../../pokeball.png" width="30" height="30" className="d-inline-block align-top" alt=""></img>
                    <a href = "" className="navbar-brand"> Pokedex </a>
                    
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="https://github.com/Izahe/pokedex">Repository</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            </div>
        )
    }
}