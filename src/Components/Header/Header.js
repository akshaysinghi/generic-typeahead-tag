import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import { linkedin } from "../../Utils/constant";

const Header = () => {
  const redirectToLinkedin = () => {
    window.open(linkedin, "_BLANK");
  };

  return (
    <>
      <AppBar color="primary">
        <Container>
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                flexGrow: 1,
                display: { xs: "flex", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Generic Search
            </Typography>

            <Box>
              <Tooltip title="Hi, This is Akshay Singhi">
                <IconButton onClick={redirectToLinkedin} sx={{ p: 2 }}>
                  <Avatar
                    alt="Akshay Singhi"
                    src="https://avatars.githubusercontent.com/u/7436199?v=4"
                  />
                </IconButton>
              </Tooltip>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Typography variant="h5" sx={{ mt: 10 }} align={"left"}>
        Welcome Mate!
      </Typography>
    </>
  );
};
export default Header;
