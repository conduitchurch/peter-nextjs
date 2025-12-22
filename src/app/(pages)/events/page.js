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

import Events from '@/configs/events.js'

const now = new Date()

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
        <Grid size={12} container alignItems='stretch'>
          { Events.filter(event => now < event.timestamp).map((event, index) => (
            <Grid size={{ xs: 12, md: 4, lg: 3 }} key={event.id} display='flex'>
              <Card sx={{ width: '100%' }}>
                <CardMedia image={event.src} sx={{ height: 200 }} />
                <CardHeader title={event.title} subheader={event.subheader} />
                <CardActions disableSpacing sx={{ display: 'flex', justifyContent: 'right' }}>
                  { event?.learnMore && (
                    <NextLink href={event.learnMore} title={event.title}>
                      <Button variant='contained' color='secondary' size='small'>Learn More</Button>
                    </NextLink>
                  )}
                  { event?.comingSoon && (
                    <Button disabled variant='contained' color='secondary' size='small'>Coming Soon!</Button>
                  )}
                </CardActions>
              </Card>
            </Grid>
          ))}
          </Grid>
          <Grid size={12}>
            <Divider variant='middle' />
          </Grid>
          <Grid size={12} container alignItems='stretch'>
          { Events.filter(event => now > event.timestamp).map((event, index) => (
            <Grid size={{ xs: 12, md: 4, lg: 3 }} key={event.id} display='flex'>
              <Card sx={{ opacity: 0.5, width: '100%' }}>
                <CardMedia image={event.src} sx={{ height: 200 }} />
                <CardHeader title={event.title} subheader={event.subheader} />
                <CardActions disableSpacing></CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Page;

export const metadata = {
  title: `Events | ${themeConfig.appDescription}`,
  description: themeConfig.appDescription,
};
