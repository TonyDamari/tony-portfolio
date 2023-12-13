import React, { useEffect, useRef, useState } from "react";
import { Box, List, ListItem } from "@mui/material";
import { gradient, platinum } from "./constants";
import { motion } from "framer-motion";

const ListWithGrowingLine = ({ listItems }) => {
    const ref = useRef(null);
    const [isVisble, setIsVisble] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisble(entry.isIntersecting);
            },
            { rootMargin: "-30px" },
        );
        observer.observe(ref.current);
        return () => observer.disconnect();
    }, [isVisble]);

    return (
        <Box ref={ref}>
            <List>
                {listItems.map((item, index) => {
                    const containerVariants = {
                        initial: { width: 0 },
                        animate: isVisble ? { width: (index + 1) * 20, transition: { duration: 5 } } : { width: 0 },
                    };

                    return (
                        <ListItem key={index} sx={{ color: platinum }}>
                            <Box mr={2}>
                                {/* <Box
                                sx={{
                                    height: "2px",
                                    width: `${(index + 1) * 20}px`,
                                    background: gradient,
                                    transition: "width 0.3s ease",
                                }}
                            ></Box> */}
                                <motion.div
                                    variants={containerVariants}
                                    initial="initial"
                                    animate="animate"
                                    style={{ height: "2px", background: gradient }}
                                ></motion.div>
                            </Box>
                            {item}
                        </ListItem>
                    );
                })}
            </List>
        </Box>
    );
};

export default ListWithGrowingLine;
