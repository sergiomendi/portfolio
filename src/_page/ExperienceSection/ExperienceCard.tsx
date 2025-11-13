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
        2024 – Present
      </Typography>

      <Typography variant="body1" sx={{ mb: 1.5 }}>
        • Developed and maintained interactive interfaces using{" "}
        <b>React, TypeScript, CSS, and Material UI</b> for a platform with over{" "}
        <b>80,000 active users</b>.
      </Typography>
      <Typography variant="body1" sx={{ mb: 1.5 }}>
        • Implemented functional dashboards to extract insights and provide
        value from processed data.
      </Typography>
      <Typography variant="body1" sx={{ mb: 1.5 }}>
        • Developed and maintained backend services in <b>.NET (C#)</b>{" "}
        integrated with <b>PostgreSQL</b>, ensuring scalability and high
        performance.
      </Typography>
      <Typography variant="body1">
        • Applied scripting in <b>Python</b> and <b>SQL</b> to efficiently
        process and transform data sets.
      </Typography>
    </Box>
  );
};
