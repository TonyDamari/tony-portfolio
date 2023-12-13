import { Box, Link } from "@mui/material";
import React from "react";
import Heading from "./Heading";
import { Camera, Description, GitHub, Mail, Phone } from "@mui/icons-material";
import myCV from "../assets/sample.pdf";

const Contact = () => {
    return (
        <Box m="1.5em 2.5em" id="#contact" name="contact" p={5}>
            <Heading title="Contact" />

            <Box p={5} display="flex" alignItems={"center"} justifyContent={"space-evenly"}>
                <Link href="https://github.com/TonyDamari" target="_blank" sx={{ color: "#fff" }} rel="noreferrer">
                    <GitHub fontSize="large" />
                </Link>
                <Link href="mailto:tony.damari@gmail.com" target="_blank" sx={{ color: "#fff" }} rel="noreferrer">
                    <Mail fontSize="large" />
                </Link>
                <Link href="tel:+27799603052" target="_blank" sx={{ color: "#fff" }}>
                    <Phone fontSize="large" />
                </Link>
                <Link
                    href="https://www.pexels.com/@tony-damari-3906406/"
                    target="_blank"
                    sx={{ color: "#fff" }}
                    rel="noreferrer"
                >
                    <Camera fontSize="large" />
                </Link>
                <Link href={myCV} download="React-Sample.pdf" target="_blank" sx={{ color: "#fff" }} rel="noreferrer">
                    <Description fontSize="large" />
                </Link>
            </Box>
        </Box>
    );
};

export default Contact;
