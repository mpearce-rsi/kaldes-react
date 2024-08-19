"use client";

import { Box, Typography } from "@mui/material";
import React from "react";
import { NavLinkProps } from "./navLinkHelpers";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ text, route, keyText }: NavLinkProps) => {
  const pathName = usePathname();
  const location = pathName.split("/")[1];
  console.log(location, keyText);

  return (
    <Box sx={{ p: 2 }}>
      <Link href={route}>
        <Typography
          variant="h6"
          sx={{ color: location === keyText ? "#288dbb" : "#6d6d6d" }}
        >
          {text}
        </Typography>
      </Link>
    </Box>
  );
};

export default NavLink;
