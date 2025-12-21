import themeConfig from "@/configs/themeConfig";
import NextLink from "next/link";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import nextConfig from "next.config.mjs";

const events = [
  { id: 'comm_122125', src: `${nextConfig.assetPrefix}/images/communion.jpg`, title: 'Communion', subheader: 'Dec 21'},
  { id: '21dop_26', src: 'https://cdn.sanity.io/images/2uj21qja/production/3d5a5bf900f9095c70de86b3a87bc23f6acf515b-2250x2250.jpg', title: '21 Days of Prayer', subheader: 'Jan 4 - Jan 26', learnMore: '/pray'}
]

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
            Events
          </Typography>
        </Grid>
        { events.map((event, index) => (
          <Grid size={{ xs: 12, md: 4, lg: 3 }} key={event.id}>
            <Card>
              <CardMedia image={event.src} sx={{ height: 200 }} />
              <CardHeader title={event.title} subheader={event.subheader} />
              <CardActions>
                { event?.learnMore && (
                  <NextLink href={event.learnMore} title={event.title}>
                    <Button variant='contained' color='secondary'>Learn More</Button>
                  </NextLink>
                )}
                { event?.comingSoon && (
                  <Button disabled variant='contained' color='secondary'>Coming Soon!</Button>
                )}
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Page;

export const metadata = {
  title: `Events | ${themeConfig.appDescription}`,
  description: themeConfig.appDescription,
};
