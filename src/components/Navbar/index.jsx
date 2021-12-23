import {
    NavLink
} from "react-router-dom";

import { AiFillHome} from 'react-icons/ai';
import { BiMessageSquareAdd} from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';


import { Logout } from "../Logout";

import "./styles.css"
export const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li>
                    <NavLink  exact={true} activeClassName="nav-selected" to="/"> <AiFillHome className = "icons"/> </NavLink>
                </li>
                <li>
                    <NavLink  exact={true} activeClassName="nav-selected" to="/profile"> <CgProfile className = "icons"/> </NavLink>
                </li> 
                <li>
                    <NavLink  exact={true} activeClassName="nav-selected" to="/newPost"> <BiMessageSquareAdd className = "icons"/> </NavLink>
                </li>
                <li>
                    <NavLink  exact={true} activeClassName="nav-selected" to="/login"> Login</NavLink>
                </li>
                <li>
                    <Logout></Logout>
                </li>
            </ul>
        </nav>
    )
}