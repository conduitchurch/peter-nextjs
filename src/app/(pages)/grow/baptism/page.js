import themeConfig from "@/configs/themeConfig";
import NextLink from "next/link";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import nextConfig from "next.config.mjs";

const Page = () => {
  return (
    <Grid container paddingTop={20} paddingX={4}>
      <Grid
        size={{ xs: 12, lg: 10, xl: 8 }}
        offset={{ xs: 0, lg: 1, xl: 2 }}
        container
        spacing={4}
      >
        <Grid size={12}>
          <Typography variant="h2" textAlign="center">
            Baptism
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 8 }} offset={{ xs: 0, md: 2 }}>
          <Typography variant="h6" textAlign="center">
            What is Baptism?
          </Typography>
          <br />
          <Typography variant="body1" textAlign="justified">
            Baptism is an important step of obedience that shows others we have personally trusted Jesus for our salvation. Jesus was baptized when He was on the earth, and we do this to follow His example. When Christians are baptized, they are submerged under water to identify with the death and burial of Jesus and raised out of the water to identify with His resurrection.
          </Typography>
          <br />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Page;

export const metadata = {
  title: `Baptism | ${themeConfig.appDescription}`,
  description: themeConfig.appDescription,
};
