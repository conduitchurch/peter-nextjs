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
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import nextConfig from "next.config.mjs";
import PrayerTabs from './components/PrayerTabs'

const Page = () => {
  return (
    <Grid container paddingTop={20} paddingX={4}>
      <Grid
        size={{ xs: 12, lg: 10, xl: 10 }}
        offset={{ xs: 0, lg: 1, xl: 1 }}
        container
        spacing={4}
      >
        <Grid size={12}>
          <Typography variant="h2" textAlign="center">
            21 Days of Prayer & Fasting
          </Typography>
        </Grid>
        <Grid size={12}>
          <Typography variant="h4" textAlign="center">
            January 4th, 2026 - January 24th, 2026
          </Typography>
          <br />
        </Grid>
        <Grid size={12}>
            <PrayerTabs />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Page;

export const metadata = {
  title: `21 Days of Prayer | ${themeConfig.appDescription}`,
  description: themeConfig.appDescription,
};
