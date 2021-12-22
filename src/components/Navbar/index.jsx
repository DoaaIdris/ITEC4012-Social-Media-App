import {
    NavLink
} from "react-router-dom";

import { FaStore, FaShoppingCart} from 'react-icons/fa';

import { Logout } from "../Logout";

import "./styles.css"
export const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li>
                    <NavLink exact={true} activeClassName="nav-selected" to="/"> Home</NavLink>
                </li>
                <li>
                    <NavLink exact={true} activeClassName="nav-selected" to="/profile"> Profile</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="nav-selected" to="/login"> Login</NavLink>
                </li>
                <li>
                    <NavLink exact={true} activeClassName="nav-selected" to="/newPost"> Add Post</NavLink>
                </li>
                <li>
                    <Logout></Logout>
                </li>
            </ul>
        </nav>
    )
}