import React from "react";
import { Box, Divider, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kaldes Financial | Partners",
  description:
    "Learn how to get the credit you need to grow your company through Kaldes Financial's network of partners that can help you navigate the alternative finance market",
};

const Page = () => {
  return (
    <Box sx={{ px: 32, py: 8 }}>
      <Typography variant="h3" sx={{ color: "#288dbb" }}>
        Our Partners
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
          <Typography variant="h6">Bankers & Workout Officers</Typography>
          <Typography variant="body1">
            Commercial Bankers are a key partner for Kaldes Financial. Not only
            do we refer lending opportunities to bankers, but we receive many of
            our business leads from bankers, for two primary reasons. First, if
            you as a banker have to turn down a difficult credit request, there
            are still ways to keep the banking while helping the company find a
            lender. Additionally, if a customer’s loan is downgraded and needs
            to find a new lender, Kaldes can help. Make the introduction to
            Kaldes Financial, and we will do the rest.
          </Typography>
        </Grid>
        <Grid item md={4}>
          <Image
            src="/bankers.jpeg"
            alt="bankers Image"
            width={350}
            height={234}
            priority
          />
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid item md={4}>
          <Image
            src="/turnaround.jpeg"
            alt="turnaround Image"
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
          <Typography variant="h6">Turnaround Professionals</Typography>
          <Typography variant="body1">
            If you’re a turnaround professional, a receiver or a CRO, you have
            enough on your plate when engaged with a client. Navigating a client
            and its management through difficult times is tough enough without
            having to double as an investment banker. Let Kaldes help. Our fees
            are earned on the back end, so we can help lift the heavy burden of
            finding liquidity sources while you focus on financial performance
            without further liquidity disruption. Call us for a free assessment.
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
          <Typography variant="h6">Attorneys</Typography>
          <Typography variant="body1">
            If you’re a restructuring attorney, a bankruptcy attorney or if you
            have clients that are just looking to replace their current lender
            for any reason, you’re focused on the client’s legal needs. Give us
            a call and let us run with the refinancing project. We don’t charge
            a success fee until we have a successful outcome, so we bear the
            risk.
          </Typography>
        </Grid>
        <Grid item md={4}>
          <Image
            src="/attorneys.jpeg"
            alt="attorneys image"
            width={350}
            height={234}
            priority
          />
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid item md={4}>
          <Image
            src="/cpa.jpeg"
            alt="cpa Image"
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
          <Typography variant="h6">CPAs</Typography>
          <Typography variant="body1">
            In the course of your relationship with a commercial enterprise,
            whether you’re on the Audit, Tax or Advisory side of things, there
            will be times when your client will express an interest, or a need,
            to find liquidity, leverage up their balance sheet, or refinance an
            existing borrowing relationship. Let us help. Since you understand
            the inner workings and financial performance of the client, we can
            do the legwork based on your input. This can be a great relationship
            enhancement.
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
          <Typography variant="h6">Referral Appreciation Program</Typography>
          <Typography variant="body1">
            At Kaldes Financial, we show our appreciation for referrals in a
            meaningful way – we share the upside with the referring party! Call
            us to discuss this program, how it works, and what it can mean for
            you.
          </Typography>
        </Grid>
        <Grid item md={4}>
          <Image
            src="/otherPartners.jpeg"
            alt="otherPartners image"
            width={350}
            height={234}
            priority
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Page;
