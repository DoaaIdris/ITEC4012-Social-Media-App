import {
    NavLink
} from "react-router-dom";

import { AiFillHome} from 'react-icons/ai';
import { BiMessageSquareAdd} from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';

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
                    <NavLink  exact={true} activeClassName="nav-selected" to="/"> <AiFillHome className = "icons"/> </NavLink>
                </li>
                <li>
                    <NavLink  exact={true} activeClassName="nav-selected" to="/me"> <CgProfile className = "icons"/> </NavLink>
                </li> 
                <li>
                    <a activeClassName="nav-selected"  onClick={() => setShow(true)}> <BiMessageSquareAdd className = "icons"/> </a>
                    <NewPostModal onClose={() => setShow(false)} show={show}/>
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