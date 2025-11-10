import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import { IconButton, Typography } from "@mui/material";
import SimCardDownloadIcon from "@mui/icons-material/SimCardDownload";

export function ProfileSection() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "70%",
        height: "100%",
        gap: 2,
      }}
    >
      <Box display={"flex"} flexDirection={"column"} gap={3}>
        <Typography variant="h1">Sergio Mendiola</Typography>
        <Typography variant="h2" sx={{ color: "#ffe0a8ff" }}>
          Fullstack Developer | Data Scientist
        </Typography>
        <Typography variant="h3">
          Always creating impactful tech that mixes engineering + creativity
          using modern technologies. I love coding, travelling and learning new
          things!
        </Typography>
        <Box display={"flex"} gap={1} alignItems={"center"}>
          <IconButton href="https://github.com/sergiomendi" target="_blank">
            <Avatar alt="Avatar" src="../../public/assets/github.png" />
          </IconButton>
          <IconButton href="mailto:smendiolaarraez@gmail.com">
            <img
              alt="Avatar"
              src="../../public/assets/gmail.svg"
              style={{ width: 40, height: 40 }}
            />
          </IconButton>
          <IconButton
            href="./../public/assets/Sergio_Mendiola_CV.pdf"
            download="Sergio_Mendiola_CV.pdf"
            component="a"
          >
            <SimCardDownloadIcon sx={{ fontSize: "36px", color: "white" }} />
          </IconButton>
        </Box>
      </Box>
      <Avatar
        sx={{ width: 300, height: 300 }}
        alt="Avatar"
        src="/assets/foto_empresa.jpg"
        slotProps={{
          img: {
            style: {
              objectFit: "cover",
              objectPosition: "center 10%",
            },
          },
        }}
      />
    </Box>
  );
}
