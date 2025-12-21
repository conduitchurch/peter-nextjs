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
          <Typography
            variant="h2"
            textAlign="center"
          >{`About ${themeConfig.appName}`}</Typography>
        </Grid>
        <Grid size={12}>
          <Box
            sx={{
              backgroundImage: `url(${nextConfig.assetPrefix}/images/conduit_setup.jpg)`,
              height: '80vw',
              maxHeight: '700px',
              width: '100%',
              backgroundRepeat: 'no-repeat',
              backgroundPositionY: 'top',
              backgroundPositionX: 'center',
              backgroundSize: '100%',
              borderRadius: '2px',
              objectFit: 'cover'
            }}
          />
        </Grid>
        <Card component={Grid} size={12}>
          <CardHeader
            title="Why We Exist"
            slotProps={{
              title: { sx: { textAlign: "center" }, variant: "h4" },
            }}
          />
          <CardContent component={Grid} container spacing={6}>
            <Grid size={{ xs: 12, sm: 12, md: 12, lg: 5 }}>
              <Typography variant="h6" color="primary">
                We're here to help people Know God, Find Freedom, Discover their
                Purpose, and Make a Difference.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, sm: 12, md: 12, lg: 7 }}>
              <Typography variant="body2">
                Whether you're new to church, have been a Christian for many
                years, or are looking for a fresh start, you're welcome here.
                Our hope is to give you a place where you experience a fresh,
                enjoyable connection to God and a community of people.
              </Typography>
              <Divider />
              <Typography variant="body2">
                We keep our focus simple so we can have the biggest impact
                possible. Everything we do as a church is filtered through our
                focus on helping every person live the full life for which God
                created all of us.
              </Typography>
            </Grid>
          </CardContent>
        </Card>
        <Card component={Grid} size={{ xs: 12, md: 6 }}>
          <CardHeader
            title="Know God"
            subheader={
              <Link component={NextLink} href="/events" title="Events">
                Weekend Services
              </Link>
            }
            slotProps={{
              title: { variant: "h4" },
            }}
          />
          <CardContent>
            <Typography variant="body1">
              God wants to know us personally. More than just practicing
              religion, He wants a relationship with us. Our weekend services
              are where we focus on that relationship. Whether you're new to
              faith, have questions, or have been a Christ follower for a long
              time, our services are a safe place to learn more about what it
              means to know God and grow closer to Him.
            </Typography>
          </CardContent>
        </Card>
        <Card component={Grid} size={{ xs: 12, md: 6 }}>
          <CardHeader
            title="Find Freedom"
            subheader={
              <Link
                component={NextLink}
                href="/grow/small-groups"
                title="Small Groups"
              >
                Small Groups
              </Link>
            }
            slotProps={{
              title: { variant: "h4" },
            }}
          />
          <CardContent>
            <Typography variant="body1">
              One of the ways God designed for us to live in freedom is to have
              people in our life to help us in the journey. Connecting with
              others in Highlands Small Groups is a practical and enjoyable way
              to find that kind of life-changing community.
            </Typography>
          </CardContent>
        </Card>
        <Card component={Grid} size={{ xs: 12, md: 6 }}>
          <CardHeader
            title="Discover Purpose"
            subheader={
              <Link
                component={NextLink}
                href="/grow/discipleship"
                title="Discipleship"
              >
                Discipleship
              </Link>
            }
            slotProps={{
              title: { variant: "h4" },
            }}
          />
          <CardContent>
            <Typography variant="body1">
              We're all an important part of God's plan, and our life will never
              make sense until we discover our purpose. The Highlands Growth
              Track is designed to help us take steps in the important process
              of discovering our purpose, and there are opportunities to attend
              weekly at every Highlands location.
            </Typography>
          </CardContent>
        </Card>
        <Card component={Grid} size={{ xs: 12, md: 6 }}>
          <CardHeader
            title="Make a Difference"
            subheader={
              <Link
                component={NextLink}
                href="/grow/serve-team"
                title="Serve Team"
              >
                Serve Team
              </Link>
            }
            slotProps={{
              title: { variant: "h4" },
            }}
          />
          <CardContent>
            <Typography variant="body1">
              This is God's ultimate plan for our life--to make a difference in
              the lives of others. When we do, the Bible tells us we will
              experience joy. Through the Highlands Dream Team, we hope to
              connect every person to an opportunity to live out their calling
              by using their gifts and talents to serve others in the church and
              the community.
            </Typography>
          </CardContent>
        </Card>
        <Grid size={12}>
          <Divider />
        </Grid>
        <Grid
          size={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link href="/beliefs" title="Statement of Faith" component={NextLink}>
            <Button variant="outlined">Statement of Faith</Button>
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Page;

export const metadata = {
  title: `About | ${themeConfig.appDescription}`,
  description: themeConfig.appDescription,
};
