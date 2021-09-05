import React from 'react';
//import {style} from 'react';

const Footer = () => {
    let footerStyle={
        position: 'fixed',
        bottom: '0',
        width: '100%',
    };
    return (
        <footer className="bg-dark text-muted" style={footerStyle}>           
            <p className="text-center p-3">
                Copyright &copy; MyTodosList
            </p>
        </footer>
    )
}

export default Footer;
