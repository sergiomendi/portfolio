import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider, CssBaseline } from "@mui/material";
import "./index.css";
import Page from "./page.jsx";
import theme from "./muiTheme";
import { ParticlesBackground } from "./_page/ProfileSection/ParticlesBackground";

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ParticlesBackground />
      <Page />
    </ThemeProvider>
  </StrictMode>
);
