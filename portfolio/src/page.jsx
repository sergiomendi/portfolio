import { Section } from "./_page/Section";
import Box from "@mui/material/Box";

export default function Page() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        width: "100%",
        height: "100%",
      }}
    >
      <Section />
      <Section />
    </Box>
  );
}
