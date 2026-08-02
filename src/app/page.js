
import Carousel from "@/@core/components/CarouselOptimized";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  Typography,
  Button,
  Paper,
  styled,
  Box,
} from "@mui/material";
import nextConfig from "next.config.mjs";
import Head from "next/head";
import NextLink from "next/link";

import Photos from "@/constants";

const pastorImage = Photos.index.pastorImage;
const slides = Photos.index.slides;

const Home = () => {

  return (
    <>
      <Grid container padding={0} rowSpacing={5} columnSpacing={0}>
        <Grid size={12}>
          <Carousel slides={slides} randomize />
        </Grid>
        <Grid size={10} offset={1} sx={{ zIndex: 1 }}>
          <Grid container spacing={3} alignItems="stretch">
            <Grid
              size={{ xs: 12, md: 5 }}
              offset={{ xs: 0, md: 1 }}
              display="flex"
            >
              <Card sx={{ width: "100%" }}>
                <CardHeader title="Plan your Visit" />
                <CardContent>
                  <Typography variant="body1">
                    We'd love for you to join us this Sunday!
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <NextLink href="/visit" title="Meet with us">
                    <Button variant="contained">Meet with us</Button>
                  </NextLink>
                </CardActions>
              </Card>
            </Grid>
            {/* <Grid size={{ xs: 12, md: 4 }} display='flex'>
              <Card sx={{ width: '100%' }}>
                <CardHeader title="Recent Messages" />
                <CardContent>
                  <Typography variant="body1">
                    Check out our recent messages or full worship service online!
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <Button variant="contained">Watch Now</Button>
                </CardActions>
                </Card>
              </Grid> */}
            {/* <Grid size={{ xs: 12, md: 4 }} display='flex'>
              <Card sx={{ width: '100%' }}>
              <CardHeader title="One Year Bible" />
              <CardContent>
                <Typography variant="body1">
                  Spend time in God's Word with this daily Bible reading plan.
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <Button variant="contained">Start Reading</Button>
              </CardActions>
              </Card>
            </Grid> */}
            <Grid size={{ xs: 12, md: 5 }} display="flex">
              <Card sx={{ width: "100%" }}>
                <CardHeader title="21 Days of Prayer" />
                <CardContent>
                  <Typography variant="body1">
                    Prayer is our first response, not our last resort.
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <NextLink href="/pray" title="Learn More">
                    <Button variant="contained">Learn More</Button>
                  </NextLink>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Grid>
        <Grid size={12} sx={{ zIndex: 1 }} component={Paper}>
          <Grid container spacing={3} padding={10}>
            <Grid
              offset={{ xs: 0, sm: 0, md: 1, lg: 2 }}
              size={{ xs: 12, sm: 12, md: 6, lg: 5, xl: 3 }}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box sx={{ height: 300, width: 300, overflow: 'hidden' }}>
                {/* <img
                  src={`${nextConfig.assetPrefix}/images/pastor.jpg`}
                  alt="Preaching"
                  style={{ height: '150%', width: 'auto', marginLeft: '-53%', marginTop: '-20%' }}
                /> */}
                <picture>
                  <source
                    type="image/avif"
                    srcSet={pastorImage.avif.set}
                    // sizes="(max-width: 600px) 90v, 800px"
                  />
                  <source
                    type="image/webp"
                    srcSet={pastorImage.webp.set}
                    // sizes="(max-width: 600px) 90v, 800px"
                  />
                  <img
                    src={pastorImage.jpg}
                    style={{ height: '150%', width: 'auto', marginLeft: '-53%', marginTop: '-20%' }}
                    alt={pastorImage.alt}
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              </Box>
            </Grid>
            <Grid
              size={{ xs: 12, sm: 12, md: 5, lg: 5, xl: 5 }}
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <Typography variant="h6">
                Our mission is to make disciples who are deeply connected to
                Christ and each other; who are empowered by the Holy Spirit to
                love boldly; who are equipped to serve as conduits of God's love
                to a broken world.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
