import React from "react";
import { Box, Typography } from "@mui/material";
import Heading from "./Heading";
import {  business_tools, frameworks, languages, platinum, web_technologies } from "./constants";
import { ListBox } from "./ListBox";
import wave from "../assets/waved.png";

const About = () => {
    return (
        <Box
            name="about"
            m="1.5em 2.5em"
            id="#about"
            p={5}
            // sx={{
            //     backgroundImage: `url(${wave})`,
            //     backgroundSize: "cover",
            //     backgroundPosition: "center",
            //     backgroundRepeat: "no-repeat",
            //     backgroundBlendMode: "darken",
            //     width: "100vw",
            //     minheight: "100vh",
            // }}
        >
            <Heading title="About" />
            {/* <img src={wave} alt="" /> */}
            <Box mb={4}>
                <Typography gutterBottom sx={{ color: platinum }}>
                    I am a passionate and results-driven software developer with a year of hands-on experience in
                    crafting robust and user-friendly applications. My journey in the world of programming began with a
                    profound fascination for technology, and over the past year, I have honed my skills in JavaScript,
                    TypeScript, React, React Native, and WordPress.
                </Typography>
                <br />
                <Typography gutterBottom sx={{ color: platinum }}>
                    I find joy in turning ideas into reality through elegant and efficient code. My commitment to
                    staying on top of industry trends and my continuous thirst for knowledge have been pivotal in my
                    professional growth. I thrive in collaborative environments and am always eager to take on new
                    challenges that push the boundaries of my expertise.
                </Typography>
            </Box>
            <Box p={5}>
                <Typography variant="h3" gutterBottom>
                    Tech Stack
                </Typography>
                <ListBox title="Languages" listItems={languages} />
                <ListBox title="Frameworks / Libraries" listItems={frameworks} />
                <ListBox title="Technologies" listItems={web_technologies} />
                <ListBox title="Business Tools" listItems={business_tools} />
            </Box>
        </Box>
    );
};

export default About;
