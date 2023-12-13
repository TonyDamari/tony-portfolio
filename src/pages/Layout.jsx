import { Box } from "@mui/material";
import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const Layout = () => {
    return (
        <Box sx={{ position: "relative" }}>
            <Navbar />
            {/* <Sidebar /> */}
            <Outlet />
            <Footer />
        </Box>
    );
};

export default Layout;
