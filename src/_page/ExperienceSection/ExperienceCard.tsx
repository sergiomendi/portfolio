import { Box, Typography } from "@mui/material";

export const ExperienceCard = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        maxWidth: 800,
        padding: "2.5rem",
        borderRadius: "1.5rem",
        background: "rgba(255, 255, 255, 0.05)",
        boxShadow: "0 0 25px rgba(255, 224, 168, 0.2)",
        border: "1px solid rgba(255, 224, 168, 0.3)",
        backdropFilter: "blur(8px)",
      }}
    >
      <Typography variant="h2" sx={{ color: "#ffe0a8ff" }}>
        Fullstack Developer
      </Typography>

      <Typography
        variant="subtitle1"
        sx={{ color: "rgba(255,255,255,0.8)", mb: 0.5 }}
      >
        CYPE Ingenieros, Alicante
      </Typography>

      <Typography
        variant="subtitle2"
        sx={{ color: "rgba(255,255,255,0.6)", mb: 3 }}
      >
        2024 – Actualidad
      </Typography>

      <Typography variant="body1" sx={{ mb: 1.5 }}>
        • Desarrollé y mantuve interfaces interactivas usando{" "}
        <b>React, TypeScript, CSS y Material UI</b> para una plataforma con más
        de <b>80,000 usuarios activos</b>.
      </Typography>
      <Typography variant="body1" sx={{ mb: 1.5 }}>
        • Implementé dashboards funcionales para extraer insights y aportar
        valor a los datos procesados.
      </Typography>
      <Typography variant="body1" sx={{ mb: 1.5 }}>
        • Desarrollé y mantuve servicios backend en <b>.NET (C#)</b> integrados
        con <b>PostgreSQL</b>, garantizando escalabilidad y alto rendimiento.
      </Typography>
      <Typography variant="body1">
        • Apliqué scripting en <b>Python</b> y <b>SQL</b> para procesar y
        transformar conjuntos de datos de forma eficiente.
      </Typography>
    </Box>
  );
};
