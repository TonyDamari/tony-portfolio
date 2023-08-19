import { createTheme } from "@mui/material";

export const colors = {
    black: {
        100: "#d1d1d1",
        200: "#a3a3a3",
        300: "#767676",
        400: "#484848",
        500: "#1a1a1a",
        600: "#151515",
        700: "#101010",
        800: "#0a0a0a",
        900: "#050505",
    },

    red: {
        100: "#f2d8d3",
        200: "#e5b1a7",
        300: "#d7897a",
        400: "#ca624e",
        500: "#bd3b22",
        600: "#972f1b",
        700: "#712314",
        800: "#4c180e",
        900: "#260c07",
    },
};

export const portfolioTheme = createTheme({
    palette: {
        background: {
            default: "#1A1A1A",
            paper: "#bd3b22",
        },
        primary: {
            main: "#bd3b22",
            contrastText: "#fff",
        },
        secondary: {
            main: "#2C394B",
            contrastText: "#fff",
        },
        text: {
            primary: "#FFF",
            secondary: "rgb(200,200,200)",
        },
        action: {
            disabled: "rgb(70,70,70)",
            disabledBackground: "rgb(150,150,150)",
        },
    },
});
