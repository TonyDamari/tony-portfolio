import { useTheme } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const Home = () => {
    const theme = useTheme();
    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
            }}
        >
            <Hero />
            <About />
            <Projects />
            <Contact />
        </motion.main>
    );
};

export default Home;
