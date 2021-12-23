import {
    NavLink
} from "react-router-dom";

import { FaStore, FaShoppingCart} from 'react-icons/fa';

import { Logout } from "../Logout";
import { useState} from "react";
import { NewPostModal } from "../NewPostModal";

import "./styles.css"

export const Navbar = () => {

    const [show, setShow] = useState(null);

    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li>
                    <NavLink exact={true} activeClassName="nav-selected" to="/"> Home</NavLink>
                </li>
                <li>
                    <NavLink exact={true} activeClassName="nav-selected" to="/me"> Profile</NavLink>
                </li>
                <li>
                    <NavLink exact={true} activeClassName="nav-selected" to="/login"> Login</NavLink>
                </li>
                <li>
                    <a activeClassName="nav-selected" onClick={() => setShow(true)}>Add Post </a>
                    <NewPostModal onClose={() => setShow(false)} show={show}/>
                </li>
                <li>
                    <Logout></Logout>
                </li>
            </ul>
        </nav>
    )
}