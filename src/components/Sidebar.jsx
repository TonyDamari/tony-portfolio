import { Box, Link } from "@mui/material";
import React from "react";

const Sidebar = () => {
    return (
        <Box sx={{ position: "sticky", top: "10%", left: 0, zIndex: 20, display: "flex", flexDirection: "column" }}>
            <Link>About</Link>
            <Link>Projects</Link>
            <Link>Contact</Link>
        </Box>
    );
};

export default Sidebar;
