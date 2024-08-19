import { Metadata } from "next";
import Image from "next/image";

import { Box, Divider, Grid, Typography } from "@mui/material";

export const metadata: Metadata = {
  title: "Kaldes Financial | Home",
  description:
    "Kaldes Financial Homepage | Experienced alternative finance solution to help your company secure credit and grow in the marketplace",
};

export default function Home() {
  return (
    <Box sx={{ px: 32, py: 8 }}>
      <Typography variant="h3" sx={{ color: "#288dbb" }}>
        Introduction
      </Typography>
      <Divider sx={{ mb: 2, mt: 1, backgroundColor: "#888", height: "5px" }} />
      <Typography variant={"body1"}>
        Since 2011, Kaldes Financial has been helping companies by sourcing debt
        financing nationwide through an extensive network of banks,
        non-regulated lenders, SBA lenders, and alternative lenders of every
        kind. Our mission is to provide best-in-class service for borrowers,
        lenders and service providers by finding the most suitable deal
        structure for each needed financing in as expedient a manner as
        possible.
      </Typography>
      <Typography variant={"body1"} sx={{ my: 2 }}>
        We strive to always provide superior communication with all parties
        concerning debt placements, restructurings, and refinancings, and to
        create borrower and lender loyalty through service excellence, speed,
        and successful financing outcomes. In addition, we can provide
        consulting services on a time & materials basis for situations that need
        more hands-on customized attention, including preparation for going to
        market.
      </Typography>
      <Divider sx={{ my: 4, backgroundColor: "#888", height: "5px" }} />
      <Grid container>
        <Grid item md={4}>
          <Image
            src="/meeting.jpg"
            alt="Meeting Image"
            width={400}
            height={267}
            priority
          />
        </Grid>
        <Grid
          item
          md={4}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography variant="h6">What We Provide</Typography>
          <ul>
            <li>
              <Typography variant="body1">
                Working capital lines of credit
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Asset-based credit facilities
              </Typography>
            </li>
            <li>
              <Typography variant="body1">Factoring facilities</Typography>
            </li>
            <li>
              <Typography variant="body1">Equipment loans</Typography>
            </li>
            <li>
              <Typography variant="body1">Purchase order financing</Typography>
            </li>
            <li>
              <Typography variant="body1">
                Merger & acquisition financing
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Cash flow term loans where applicable
              </Typography>
            </li>
            <li>
              <Typography variant="body1">Bridge financings</Typography>
            </li>
          </ul>
        </Grid>
        <Grid item md={4}>
          <Image
            src="/money.jpg"
            alt="Money Image"
            width={400}
            height={267}
            priority
          />
        </Grid>
      </Grid>
      <Grid container sx={{ mt: 4 }}>
        <Grid
          item
          md={4}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography variant="h6">Situations We Serve</Typography>
          <ul>
            <li>
              <Typography variant="body1">
                Refinancings approaching loan maturity
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Expansion of credit facilities
              </Typography>
            </li>
            <li>
              <Typography variant="body1">Turnarounds</Typography>
            </li>
            <li>
              <Typography variant="body1">Bank workouts</Typography>
            </li>
            <li>
              <Typography variant="body1">Debt restructuring</Typography>
            </li>
            <li>
              <Typography variant="body1">Merger & acquisitions</Typography>
            </li>
          </ul>
        </Grid>
        <Grid item md={4}>
          <Image
            src="/handshake.jpg"
            alt="Handshake Image"
            width={400}
            height={267}
            priority
          />
        </Grid>
        <Grid
          item
          md={4}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography variant="h6">Some Industries We Serve</Typography>
          <ul>
            <li>
              <Typography variant="body1">Manufacturing</Typography>
            </li>
            <li>
              <Typography variant="body1">Wholesale distribution</Typography>
            </li>
            <li>
              <Typography variant="body1">Staffing</Typography>
            </li>
            <li>
              <Typography variant="body1">Building materials</Typography>
            </li>
            <li>
              <Typography variant="body1">Consumer goods</Typography>
            </li>
            <li>
              <Typography variant="body1">Food</Typography>
            </li>
            <li>
              <Typography variant="body1">Healthcare</Typography>
            </li>
            <li>
              <Typography variant="body1">Construction</Typography>
            </li>
          </ul>
        </Grid>
      </Grid>
    </Box>
  );
}
