/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kaldes Financial | Media",
  description:
    "Find Kaldes Financial on YouTube and LinkedIn to stay up to date on the world of alternative finance",
};

const Page = () => {
  return (
    <Box sx={{ px: 32, py: 8 }}>
      <Typography variant="h3" sx={{ color: "#288dbb" }}>
        Media
      </Typography>
      <Divider sx={{ mb: 2, mt: 1, backgroundColor: "#888", height: "5px" }} />
      <Grid container spacing={4}>
        <Grid
          item
          md={8}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 2,
          }}
        >
          <Typography variant="h6">
            Navigating Alternative Finance - Overview
          </Typography>
          <Typography variant="body1">
            Thank you so much for looking into Kaldes Financial! We hope you'll
            take the time to view this video on Alternative Finance: An in-depth
            look at Kaldes Financial, LLC's role in the ever-changing market
            that is Commercial Finance. Thanks again for watching. If you'd like
            to learn more, please subscribe to our YouTube channel by clicking
            below.
          </Typography>
          <Button
            color="primary"
            variant="contained"
            href="https://www.youtube.com/channel/UC0wigBy74oNgaWIfI1rNqNA"
            sx={{ maxWidth: 200, backgroundColor: "#288dbb" }}
          >
            Watch More!
          </Button>
          <Divider
            sx={{ mt: 1, backgroundColor: "#888", height: "2px" }}
          />

          <Typography variant="h6" sx={{ cursor: "pointer", color: "#288dbb" }}>
            LinkedIn
          </Typography>
        </Grid>
        <Grid item md={4}>
          <iframe
            className="img-fluid"
            id="ytFrame"
            width="100%"
            src="https://www.youtube.com/embed/Ht0eVfmbOLc"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            style={{ minHeight: 250 }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Page;
