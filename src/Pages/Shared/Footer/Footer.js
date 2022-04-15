import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='h-20 bg-yellow-100 flex justify-center items-center mt-6'>
            <p><small>Copyright @{year}</small></p>
        </footer>
    );
};

export default Footer;