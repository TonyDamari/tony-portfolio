import React from "react";
import bgImg from "../assets/1.jpg";
import { Backdrop, Box, Button, Divider, Typography } from "@mui/material";
import zIndex from "@mui/material/styles/zIndex";

const Hero = () => {
    return (
        <Box
            component="div"
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                width: "100vw",
                height: "100vh",
                backgroundImage: `url(${bgImg})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                "&::before": {
                    content: '""',
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    background:
                        "radial-gradient(circle at 24.1% 68.8%, rgba(50, 50, 50,0.6) 0%, rgba(0, 0, 0,0.6) 99.4%)",
                },
            }}
        >
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                zIndex={1}
            >
                <Typography variant="h1" gutterBottom>
                    Tony Damari
                </Typography>
                <Divider sx={{borderWidth:'1px',width:'100%', borderColor:'white'}}/>
                <Typography align="center" mt={2} variant="h5">
                    Frontend Software Developer
                </Typography>
            </Box>
        </Box>
    );
};

export default Hero;
