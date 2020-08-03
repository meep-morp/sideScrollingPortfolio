/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { PortContext } from "../context/portContext";

const Nav = (props) => {

    const [home, about, work, contact, reset, setHome, setabout, setwork, setcontact] = useContext(PortContext);

    return (
        <nav className="nav">
            <div className="links">
                <a href="#" onClick={(e) => {
                    reset()
                    setHome(true);
                }} className={home ? "current" : ""}
                >Home</a>

                <a href="#work" onClick={(e) => {
                    reset()
                    setwork(true);
                }} className={work ? "current" : ""}
                >Projects</a>

                <a href="#about" onClick={(e) => {
                    reset()
                    setabout(true);
                }} className={about ? "current" : ""}
                >About</a>

                <a href="#contact" onClick={(e) => {
                    reset()
                    setcontact(true)
                }} className={contact ? "current" : ""}
                >Contact</a>
            </div>
            <div className="wave">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#ffffff" fill-opacity="1" d="M0,224L34.3,202.7C68.6,181,137,139,206,144C274.3,149,343,203,411,208C480,213,549,171,617,149.3C685.7,128,754,128,823,106.7C891.4,85,960,43,1029,64C1097.1,85,1166,171,1234,192C1302.9,213,1371,171,1406,149.3L1440,128L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path>
                </svg>
            </div>
        </nav>
    )
}

export default Nav;