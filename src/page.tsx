import { ExperienceSection } from "./_page/ExperienceSection/ExperienceSection";
import { ProfileSection } from "./_page/ProfileSection/ProfileSection";
import Box from "@mui/material/Box";

export const commonSectionSx = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  height: "100vh",
};

export default function Page() {
  return (
    <Box sx={{ position: "relative", zIndex: 1 }}>
      <ProfileSection />
      <ExperienceSection />
    </Box>
  );
}
