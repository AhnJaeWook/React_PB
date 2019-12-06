import React from "react";
import { Link } from  "react-router-dom";
import { MdLock } from "react-icons/md";

const Header = ({ onLogout }) => (
    <div>
        <Link to={"/"}>
            D-Note
        </Link>
        <div>
            <MdLock onClick={onLogout}/>
        </div>
    </div>
);

export default Header;


    