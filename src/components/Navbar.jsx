import React from "react";
import { motion, useAnimation } from "framer-motion";
import { AppBar, Toolbar, useTheme } from "@mui/material";


const Navbar = () => {
    const controls = useAnimation();
    const theme = useTheme()
    return (
        <motion.div animate={controls}>
            <AppBar position="fixed" elevation={0} component="nav" sx={{background:theme.palette.background.default, height:70}}>
                <Toolbar
                    sx={{ justifyContent: "space-between" }}
                    component={motion.div}
                    transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                    }}
                >Tony Damari</Toolbar>
            </AppBar>
        </motion.div>
    );
};

export default Navbar;
