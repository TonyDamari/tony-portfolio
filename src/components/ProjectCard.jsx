import { Button, Card, CardActions, CardContent, CardMedia, Chip, Link, Typography } from "@mui/material";
import React from "react";

const ProjectCard = ({ title, description, tech }) => {
    return (
        <Card sx={{ maxWidth: 400 }}>
            <CardMedia
                sx={{ height: 300 }}
                image="https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                title="project"
            />
            <CardContent sx={{ background: "#361A2E" }}>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            <CardContent sx={{ background: "#361A2E" }}>
                {tech?.map((item) => (
                    <Chip label={item} color="error" sx={{marginRight:1}}/>
                ))}
            </CardContent>
            <CardActions sx={{ background: "#361A2E", padding: 2 }}>
                <Button size="small" sx={{ background: "white", color: "#584546" }}>
                    <Link
                        href="https://github.com/TonyDamari"
                        target="_blank"
                        sx={{ color: "#361A2E", textDecoration: "none" }}
                    >
                        Code Source
                    </Link>
                </Button>
                <Button size="small" sx={{ background: "white", color: "#584546" }}>
                    <Link
                        href="https://github.com/TonyDamari"
                        target="_blank"
                        sx={{ color: "#361A2E", textDecoration: "none" }}
                    >
                        Live Site
                    </Link>
                </Button>
            </CardActions>
        </Card>
    );
};

export default ProjectCard;
