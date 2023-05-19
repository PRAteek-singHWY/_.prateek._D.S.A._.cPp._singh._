import React from "react";
const year= new Date().getFullYear()
const Footer = () => {
    return (
        <footer>
            <p>Made with 💛 by Swy</p>
            <p> Copyright © {year} </p>
        </footer>
    )
};
export default Footer;


