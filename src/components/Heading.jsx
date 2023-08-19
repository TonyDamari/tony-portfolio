import { Typography, Box, useTheme, Divider } from "@mui/material";
import React from "react";

const Heading = ({ title }) => {
  const theme = useTheme();
  return (
      <Box>
          <Divider >
      <Typography
        variant="h2"
        color={theme.palette.secondary}
        fontWeight="bold"
       gutterBottom
      >
        {title}
      </Typography>
      </Divider>
    </Box>
  );
};

export default Heading;