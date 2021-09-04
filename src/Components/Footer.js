import React from 'react'
//import {style} from 'react';

const Footer = () => {
    let footerStyle={
        position: 'absolute',
        top: '80vh',
        width: '100%'
    };
    return (
        <footer className="bg-dark text-muted" style={footerStyle}>           
            <p className="text-center p-5">
                Copyright &copy; MyTodosList
            </p> 
        </footer>
    )
}

export default Footer;
