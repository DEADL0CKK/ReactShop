import React from "react";

const Navbar = ({ appName, handleCart }) => (
    <header className="grid">
        <div className="grid-left">
            <h1>{appName}</h1>
        </div>
        <div className="grid-right">
            <button onClick={handleCart}> <i></i> </button>
        </div>
    </header>
);

export default Navbar;
