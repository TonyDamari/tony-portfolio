import { Box } from "@mui/material";
import React from "react";
import Heading from "./Heading";
import ProjectCard from "./ProjectCard";

const Projects = () => {
    return (
        <Box m="1.5em 2.5em" id="#projects" name="projects" p={5}>
            <Heading title="Projects" />

            <Box display={"flex"} flexWrap={"wrap"} gap={4}>
                {/* <ProjectCard
                    title="Analica"
                    description=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque ipsam amet, ex voluptatibus quia corporis ea vel minima accusamus illum!"
                    tech={["React", "MUI", 'Typescript']}
                /> */}
             
            </Box>
        </Box>
    );
};

export default Projects;
