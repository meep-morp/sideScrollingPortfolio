/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Nav = (props) => {

    const [home, setHome] = useState(true);
    const [about, setabout] = useState(false);
    const [work, setwork] = useState(false);
    const [contact, setcontact] = useState(false);

    const reset = () => {
        setHome(false);
        setabout(false);
        setwork(false);
        setcontact(false);
    }


    return (
        <nav className="nav">
            <NavLink to="/" onClick={(e) => {
                reset()
                setHome(true);
            }} className={home ? "current" : ""}
            >Home</NavLink>

            <NavLink to="/work" onClick={(e) => {
                reset()
                setwork(true);
            }} className={work ? "current" : ""}
            >Work</NavLink>

            <NavLink to="/about" onClick={(e) => {
                reset()
                setabout(true);
            }} className={about ? "current" : ""}
            >About</NavLink>

            <NavLink to="/contact" onClick={(e) => {
                reset()
                setcontact(true)
            }} className={contact ? "current" : ""}
            >Contact</NavLink>
        </nav>
    )
}

export default Nav;