import { AppBar, Container, Toolbar, Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavLink from "../NavLink/NavLink";
import { navLinkStatic } from "../NavLink/navLinkHelpers";

const NavBar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#fff", p: 2 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Link href={"/"}>
              <Image
                src="/kaldes-logo-orig.svg"
                alt="Kaldes Financial Logo"
                width={90}
                height={80}
                priority
              />
            </Link>
            <Box sx={{ display: "flex", gap: "2", alignItems: "center" }}>
              {navLinkStatic.map((link) => (
                <NavLink
                  text={link.text}
                  route={link.route}
                  keyText={link.keyText}
                  key={link.keyText}
                />
              ))}
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
