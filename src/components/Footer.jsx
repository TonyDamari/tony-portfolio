import React from "react";

const Footer = () => {
    return (
        <footer style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>
            &copy; Conceptual Life {new Date().getFullYear()}
        </footer>
    );
};

export default Footer;
