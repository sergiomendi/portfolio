import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "'Poppins', sans-serif",
    h1: {
      fontSize: "3rem",
      fontWeight: 700,
      color: "white",
      textTransform: "uppercase",
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 500,
    },
    h3: {
      fontSize: "1rem",
      fontWeight: 500,
    },
  },
  palette: {
    mode: "dark",
    background: {
      default: "#121212",
    },
  },
  components: {
    MuiIconButton: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent", // sin círculo sólido
          transition: "all 0.4s ease-in-out",
          "&:hover": {
            backgroundColor: "transparent", // mantiene transparente
            boxShadow: "0 0 12px 6px rgba(255, 224, 168, 0.5)", // halo brillante
            transform: "scale(1.1)", // efecto de "zoom" sutil
          },
        },
      },
      defaultProps: {
        size: "medium",
      },
    },
  },
});

export default theme;
