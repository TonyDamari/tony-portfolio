import React from "react";
import html from "../assets/html5-logo-31819.png";
import reactImg from "../assets/react.png";
import NodeImg from "../assets/node.png";
import ExpressImg from "../assets/express.png";
import MongoImg from "../assets/mongodb.png";
import GithubImg from "../assets/github.png";
import NPMImg from "../assets/npm.png";
import FigmaImg from "../assets/figma.png";
import VScodeImg from "../assets/vscode.png";
import { Box, List, ListItem, Typography } from "@mui/material";
import Heading from "./Heading";

const About = () => {
    return (
        <Box m="1.5em 2.5em"  height='100vh'id='#about'>
            <Heading title="About" />
            <Box mb={2}>
                <Typography gutterBottom>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Enim itaque accusamus sed aut voluptatem dolore cupiditate
                    adipisci perspiciatis illo vel inventore ipsam libero,
                    aperiam possimus consequuntur ducimus repellendus dolor
                    sapiente.
                </Typography>
            </Box>
            <Box mb={2}>
                <Typography variant="h3" gutterBottom>Tech Stack</Typography>
            <Box>
                <Typography variant="h4"gutterBottom>Languages</Typography>
                <List>
                    <ListItem>JavaScript</ListItem>
                    
                </List>
            </Box>
            <Box mb={2}>
                <Typography variant="h4" gutterBottom>Frameworks</Typography>
                <List>
                    <ListItem>React</ListItem>
                    <ListItem>Redux</ListItem>
                </List>
            </Box>
            <Box mb={2}>
                <Typography variant="h4" gutterBottom>Libraries</Typography>
                <List>
                    <ListItem>React</ListItem>
                    <ListItem>Redux</ListItem>
                </List>
            </Box>
            <Box mb={2}>
                <Typography variant="h4" gutterBottom>Technologies</Typography>
                <List>
                    <ListItem>React</ListItem>
                    <ListItem>Redux</ListItem>
                </List>
            </Box>
            </Box>
        </Box>
    );
};

export default About;
