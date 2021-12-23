import {
    NavLink
} from "react-router-dom";

import { getAuth, onAuthStateChanged, signOut } from "@firebase/auth";
import{useEffect, useState} from "react";
import { IoLogOutOutline } from 'react-icons/io5';

import "./styles.css"

export const Logout = () => {

    const [user, setUser] = useState(null);

    useEffect(
        () => {
            const auth = getAuth();
            onAuthStateChanged( auth, (user) => {
                if(user){
                    setUser(user);
                }else {
                    setUser(null);
                } 
            })
        }, []
    )

    const logoutUser = async() => {
        const auth = getAuth();
        try{
            await signOut(auth);
        }catch (error){
            console.log(error);
        }
    }

    return(
        user && 
        <div className="logout">
            <NavLink activeClassName="nav-selected" to="/login" onClick={logoutUser}>
                Logout
                <IoLogOutOutline className="icon"/>
            </NavLink>
        </div>
  
    )
}