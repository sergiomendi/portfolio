import { Box, Typography } from "@mui/material";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import { ExperienceCard } from "./ExperienceCard";

export function ExperienceSection() {
  return (
    <Box display={"flex"} flexDirection={"column"} width={"60%"} gap={8}>
      <Box display={"flex"} alignItems={"center"} gap={1}>
        <BusinessCenterIcon sx={{ fontSize: "52px" }} />
        <Typography variant="h2">Experience</Typography>
      </Box>
      <ExperienceCard />
    </Box>
  );
}
