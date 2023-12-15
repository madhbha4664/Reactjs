import React from 'react';

function Navbar(props) {
    return (
        <>
            <nav>
                <div className='nav_left'>
                    <h1 id='logo'>Buletin</h1>
                    <p>|</p>
                    <ul>
                        <li>Stories</li>
                        <li>Creator</li>
                        <li>Community</li>
                        <li>Subscribe</li>
                    </ul>
                </div>
                <div className='nav_right'>
                    <p><i className="fa-solid fa-pen-to-square"></i> Write</p>
                    <i className="fa-solid fa-bell"></i>
                    <img src="../Images/icon.jpg" alt="Icon" />
                </div>
                <i className="fa-solid fa-bars bar"></i>
            </nav>
        </>
    );
}

export default Navbar;