import React, { useState, useEffect } from 'react';
import {AiOutlineArrowUp} from 'react-icons/ai';
import './styles.css';

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
                visible && (<AiOutlineArrowUp onClick={scrollToTop} className='scrollTop' />)
            }
        </div>
    );
}

export default ScrollButton;