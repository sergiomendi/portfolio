import { ExperienceSection } from "./_page/ExperienceSection";
import { ProfileSection } from "./_page/ProfileSection";
import Box from "@mui/material/Box";

export default function Page() {
  return (
    <Box sx={{ position: "relative", zIndex: 1 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
          width: "100%",
          height: "100vh",
        }}
      >
        <ProfileSection />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          width: "100%",
          height: "100vh",
        }}
      >
        <ExperienceSection />
      </Box>
    </Box>
  );
}
