import React, { useState } from 'react';

function Header() {
    const [isLightMode, setIsLightMode] = useState(true);

    const handleClick = () => {
        setIsLightMode(!isLightMode);

        if (isLightMode) {
            document.body.classList.add('dark-mode');
            document.body.classList.remove('light-mode');
        } else {
            document.body.classList.add('light-mode');
            document.body.classList.remove('dark-mode');
        }
    };

    return (
        <>
            <div>
                <h1>Little Lemon Restaurant</h1>
                <img src="Logo.jpg" alt="Logo" className="logo" />
            </div>
            <button className='darkmode' onClick={handleClick}>
                {isLightMode ? "Dark Mode" : "Light Mode"}
            </button>
        </>
    );
}

export default Header;