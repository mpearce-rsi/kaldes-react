"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { navLinkStatic } from "../NavLink/navLinkHelpers";
import Link from "next/link";

const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#42abdb",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        py: 4,
        px: 16,
      }}
    >
      <Box>
        <Image
          src="/kaldes-logo-blk.svg"
          alt="Kaldes Financial Logo"
          width={211}
          height={190}
          priority
        />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        {navLinkStatic.map((link) => (
          <Link href={link.route} key={link.keyText}>
            <Typography>{link.text}</Typography>
          </Link>
        ))}
      </Box>
      <Box>
        <Typography>
          © Kaldes Financial, LLC. <br />
          All Rights Reserved
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
