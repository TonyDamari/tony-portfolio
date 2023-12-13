import { Box, Typography } from "@mui/material";
import React from "react";
import ListWithGrowingLine from "./ListWithGrowingLine";
import { indigo } from "./constants";

export const ListBox = ({ title, listItems }) => {
    return (
        <Box mb={2}>
            <Typography variant="h5" gutterBottom sx={{ color: "#99f2c8" }}>
                {title}
            </Typography>
            <Box>
                <ListWithGrowingLine listItems={listItems} />
            </Box>
        </Box>
    );
};
