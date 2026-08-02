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
import PrayerTabs from "./components/PrayerTabs";
import Photos from "@/constants";
const prayerImage = Photos.pray.mainImage;

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
            21 Days of Prayer
          </Typography>
        </Grid>
        <Grid size={12}>
          <Typography variant="h4" textAlign="center">
            August 2nd, 2026 - August 22nd, 2026
          </Typography>
          <br />
        </Grid>
        <Grid size={12}>
          <Grid
            size={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <picture>
              <source
                type="image/avif"
                srcSet={prayerImage.avif.set}
                // sizes="(max-width: 600px) 90v, 800px"
              />
              <source
                type="image/webp"
                srcSet={prayerImage.webp.set}
                // sizes="(max-width: 600px) 90v, 800px"
              />
              <img
                src={prayerImage.jpg}
                style={{
                  height: "80vw",
                  maxHeight: "700px",
                  width: "auto",
                  borderRadius: "2px",
                }}
                alt={prayerImage.alt}
                loading="lazy"
                decoding="async"
              />
            </picture>
          </Grid>
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
