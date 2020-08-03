import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const PortContext = createContext();


export const PortProvider = props => {
    
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
        <PortContext.Provider value={[home, about, work, contact, reset,setHome, setabout, setwork, setcontact]}>
            {props.children}
        </PortContext.Provider>
    )
}