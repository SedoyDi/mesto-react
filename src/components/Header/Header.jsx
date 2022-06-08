import React from "react";
import "./Header.css"
import headerLogo from "../../image/header/logo.svg"

function Header() {
    return(
        <div className="Header">
        <img src={headerLogo} alt="логотип" />
        </div>
    )
}

export default Header;