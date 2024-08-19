"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
const gcImage = require("../../../public/grandCanyon1.jpeg");
const TitleBar = () => {
  const pathName = usePathname();
  const location = pathName.split("/")[1];
  const textContent =
    location === "lenders"
      ? {
          title: "Lender Product Information Submission Form",
          subTitle:
            "Lenders, please fill out your financing product information below",
        }
      : {
          title: "Kaldes Financial",
          subTitle: "Getting Businesses the Financing they Need",
        };

  return (
    <>
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#42abdb",
          textAlign: "center",
          py: 3,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Typography
          variant="h1"
          sx={{ fontSize: "2.25rem", fontWeight: "bold" }}
        >
          {textContent.title}
        </Typography>
        <Typography variant="h2" sx={{ fontSize: "1.25rem" }}>
          <em>{textContent.subTitle}</em>
        </Typography>
      </Box>
      <Image
        src="/sunset.jpg"
        width={2560}
        height={0}
        alt="Arizona background"
        style={{ width: "100%", height: "500px", objectFit: "fill" }}
      />
    </>
  );
};

export default TitleBar;
