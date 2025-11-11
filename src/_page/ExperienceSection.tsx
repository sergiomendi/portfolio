import { Box, Typography } from "@mui/material";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";

export function ExperienceSection() {
  return (
    <Box display={"flex"} alignItems={"center"} gap={2}>
      <BusinessCenterIcon sx={{ fontSize: "42px" }} />
      <Typography variant="h2">Experience</Typography>
    </Box>
  );
}
