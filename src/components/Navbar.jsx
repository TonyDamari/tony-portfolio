import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { AppBar, List, ListItem, Toolbar, Typography, useTheme } from "@mui/material";
import { Link } from "react-scroll";

const Navbar = () => {
    const controls = useAnimation();
    const theme = useTheme();
    const navItems = ["About", "Projects", "Contact"];
    const [isTop, setIsTop] = useState(true);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsTop(entry.isIntersecting);
            },
            { rootMargin: "-300px" },
        );
        observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        // Update controls animation based on isTop value
        controls.start({ background: isTop ? "transparent" : "#361A2E" });
    }, [isTop, controls]);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsTop(entry.isIntersecting);
            },
            { rootMargin: "-300px" },
        );
        observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        // Update controls animation based on isTop value
        controls.start({ background: isTop ? "transparent" : "#361A2E" });
    }, [isTop, controls]);

    return (
        <motion.div animate={controls} ref={ref}>
            <AppBar
                position="fixed"
                elevation={0}
                component="nav"
                sx={{ background: isTop ? "transparent" : "#361A2E", height: 60 }}
            >
                <Toolbar
                    sx={{ justifyContent: "space-between" }}
                    component={motion.div}
                    transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                    }}
                >
                    <Link to="hero" style={{ color: "#fff" , cursor:'pointer'}}>Tony Damari</Link>
                    <List sx={{ display: "flex" }}>
                        {navItems.map((item) => (
                            <ListItem key={item} sx={{ color: "#fff" , cursor:'pointer'}}>
                                <Link to={`${item.toLowerCase()}`}>{item}</Link>
                            </ListItem>
                        ))}
                    </List>
                </Toolbar>
            </AppBar>
        </motion.div>
    );
};

export default Navbar;
