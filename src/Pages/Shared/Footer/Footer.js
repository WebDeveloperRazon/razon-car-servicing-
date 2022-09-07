import React from 'react';

const Footer = () => {
    const tody = new Date() ;
    const year = tody.getFullYear() ;
    return (
        <footer>
            <p className="mt-5" style={{textAlign: 'center', color:'red'} }><small > Copyright &copy; by IAR Development Team {year}</small></p>
        </footer>
    );
};

export default Footer;