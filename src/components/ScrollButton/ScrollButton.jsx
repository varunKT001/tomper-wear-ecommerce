import React, { useState, useEffect } from 'react';

const ScrollButton = () => {

    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 200) {
            setVisible(true)
        }
        else
            setVisible(false)
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <div>
            {
                visible && (<button className='btnScroll' onClick={scrollToTop} style={{ cursor: "pointer", position: 'fixed', bottom: "50px", right: "50px", height: "50px", width: "50px", fontSize: "50px", borderRadius: "20px" }}>^</button>)
            }
        </div>
    );
}

export default ScrollButton;