import React from "react";
import Typed from "react-typed";

const Header = () => {
    return (
    <div id="home" className="header-wraper">
        <div className="main-info">
            <h1>Dotychczas Programowałem za pomocą </h1>
        <Typed
        className="typed-text"
        strings={["CSS/Bootstrap", "JavaScript", "React", "C++ - proceduralne"]}
        typeSpeed={40}
        backSpeed={60}
        loop
        />
        <a href="667-661-093" className="btn-main-offer">Kontakt</a>
        </div>
    </div>
    )
}

export default Header
