import React from "react";
import { Box, Divider, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kaldes Financial | Why Use Kaldes?",
  description:
    "Why use Kaldes Financial? Learn more about how alternative finance can get your company the credit to grow in the marketplace",
};

const Page = () => {
  return (
    <Box sx={{ px: 32, py: 8 }}>
      <Typography variant="h3" sx={{ color: "#288dbb" }}>
        Why Use Kaldes?
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
          <Typography variant="h6">Responsive</Typography>
          <Typography variant="body1">
            At Kaldes Financial, our goal is simple: To get your company the
            most ideal financing available in the marketplace by being small,
            fluid and agile. By the time you engage us, we are well on our way
            to finding you a lender. We don’t have large overhead or long
            bureaucratic processes to get your request up and running – we get
            right to it. Before we take an engagement, we take the time to do a
            free preliminary assessment. This includes lining up potential
            lenders to generate interest in the financing opportunity. We then
            focus on potential lenders with the lowest-cost, best terms, and
            best cultural fit for your unique business.
          </Typography>
        </Grid>
        <Grid item md={4}>
          <Image
            src="/responsive.jpeg"
            alt="Responsive Image"
            width={350}
            height={234}
            priority
          />
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid item md={4}>
          <Image
            src="/connected.jpeg"
            alt="Connected Image"
            width={350}
            height={234}
            priority
          />
        </Grid>
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
          <Typography variant="h6">Connected</Typography>
          <Typography variant="body1">
            Our edge involves our proprietary database of hundreds of lenders,
            classified by specialty, industry focus and situational
            capabilities, among other criteria. This helps us focus on the best
            lenders for your particular situation. Our database includes banks,
            non-banks, and specialty lenders of every kind. We always bring a
            number of potential candidates to the table, so often lenders will
            actually compete for your business. Once we have generated a
            competitive landscape, we work with you to discuss the various
            options and come to a consensus together on which direction is best
            for your company.
          </Typography>
        </Grid>
      </Grid>
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
          <Typography variant="h6">Dedicated</Typography>
          <Typography variant="body1">
            Most debt placement brokers simply pass along company and financial
            information to the marketplace without examining it the way a lender
            would. That can lead to problems which, inevitably, leads to
            declines. We offer value-added services to filter, re-present,
            re-format or summarize when needed, in order to present information
            in a way that is “lender-friendly”. You can put several decades of
            commercial lending experience to work for you at minimal cost,
            greatly enhancing your chances of finding the right financing
            partner for you. The best part is that any such cost will be 100%
            credited back to you upon the successful closing of your financing.
          </Typography>
        </Grid>
        <Grid item md={4}>
          <Image
            src="/dedicated.jpeg"
            alt="dedicated image"
            width={350}
            height={234}
            priority
          />
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid item md={4}>
          <Image
            src="/communicative.jpeg"
            alt="communicative Image"
            width={350}
            height={234}
            priority
          />
        </Grid>
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
          <Typography variant="h6">Collaborative</Typography>
          <Typography variant="body1">
            We believe in open communication with all parties. We keep you
            well-informed of progress being made and of feedback we are
            receiving from the lending marketplace. The quality of your
            relationship with us, and ultimately with the lender you choose, is
            dependent upon this communication style. We keep our doors and minds
            open throughout the process so you can rest easy knowing we have
            your financing needs at the forefront of what we do every day.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Page;
