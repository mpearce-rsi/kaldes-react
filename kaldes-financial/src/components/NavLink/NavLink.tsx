"use client"

import { Box, Typography } from "@mui/material";
import React from "react";
import { NavLinkProps } from "./navLinkHelpers";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ text, route, key }: NavLinkProps) => {
  const pathName = usePathname();
  const location = pathName.split("/")[0];

  return (
    <Box sx={{ p: 2 }}>
      <Link href={route}>
        <Typography
          variant="h6"
          sx={{ color: location === key ? "#4d4d4d" : "#6d6d6d" }}
        >
          {text}
        </Typography>
      </Link>
    </Box>
  );
};

export default NavLink;
