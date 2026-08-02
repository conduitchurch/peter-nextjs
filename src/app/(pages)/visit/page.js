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
import Photos from "@/constants";
const visitImage = Photos.visit.mainImage;

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
            Visit {themeConfig.appName}
          </Typography>
        </Grid>
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
              srcSet={visitImage.avif.set}
              // sizes="(max-width: 600px) 90v, 800px"
            />
            <source
              type="image/webp"
              srcSet={visitImage.webp.set}
              // sizes="(max-width: 600px) 90v, 800px"
            />
            <img
              src={visitImage.jpg}
              style={{
                height: "80vw",
                maxHeight: "700px",
                width: "auto",
                borderRadius: "2px",
              }}
              alt={visitImage.alt}
              loading="lazy"
              decoding="async"
            />
          </picture>
        </Grid>
        <Grid size={12}>
          <Card>
            <CardContent>
              <Typography variant="h4" align="center">
                Join us for worship and fellowship!
              </Typography>
              <br />
              <Typography variant="h6" align="center">
                Each Sunday at 3pm EST
              </Typography>
              <Typography variant="h6" align="center">
                At the Troutman Event Center!
              </Typography>
              <br />
              <Typography variant="body1" align="center">
                105 N Main St Troutman, NC 28166
              </Typography>
              <Typography variant="body1" align="center">
                Troutman, NC 28166
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Page;

export const metadata = {
  title: `Visit | ${themeConfig.appDescription}`,
  description: themeConfig.appDescription,
};
