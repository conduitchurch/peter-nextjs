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
            Next Steps
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 8 }} offset={{ xs: 0, md: 2 }}>
          <Typography variant="h6" textAlign="center">
            Are you ready to step out in faith?
          </Typography>
          <br />
          <Typography variant="body1" textAlign="justified">
            We believe everyone has a next step in growing in their relationship with Jesus. We want to give you the tools you need to take your next steps on your journey to Know God, Find Freedom, Discover Purpose, and Make a Difference.
          </Typography>
          <br />
          <Typography variant="body1" textAlign="justified">
            Whether that's publicly declaring your faith in Jesus by getting baptized or leading your first small group, each step is key to growing closer to Jesus and living out the purpose He has for your life.
          </Typography>
          <br />
        </Grid>
        <Card component={Grid} size={{ xs: 12, md: 6 }}>
          <CardHeader
            title="Water Baptism"
            subheader={
              <Link
                component={NextLink}
                href="/grow/baptism"
                title="Water Baptism"
              >
                Learn More
              </Link>
            }
            slotProps={{
              title: { variant: "h4" },
            }}
          />
          <CardContent>
            <Typography variant="body1">
              Have you recently accepted Jesus as your Savior? Baptism is an important step of obedience that shows others we have personally trusted Jesus for our salvation.
            </Typography>
          </CardContent>
        </Card>
        <Card component={Grid} size={{ xs: 12, md: 6 }}>
          <CardHeader
            title="Discipleship"
            subheader={
              <Link
                component={NextLink}
                href="/grow/discipleship"
                title="Discipleship"
              >
                Learn More
              </Link>
            }
            slotProps={{
              title: { variant: "h4" },
            }}
          />
          <CardContent>
            <Typography variant="body1">
              Through Discipleship, you'll learn about our church beliefs, discover the gifts God gave you, and see how to use those gifts to live out your purpose.
            </Typography>
          </CardContent>
        </Card>
        <Card component={Grid} size={{ xs: 12, md: 6 }}>
          <CardHeader
            title="Serve Team"
            subheader={
              <Link
                component={NextLink}
                href="/grow/serve-team"
                title="Serve Team"
              >
                Learn More
              </Link>
            }
            slotProps={{
              title: { variant: "h4" },
            }}
          />
          <CardContent>
            <Typography variant="body1">
              Want to use your God-given gifts to make a difference? The Serve Team is designed to help you find a place to live out your purpose inside and outside the church walls.
            </Typography>
          </CardContent>
        </Card>
        <Card component={Grid} size={{ xs: 12, md: 6 }}>
          <CardHeader
            title="Small groups"
            subheader={
              <Link
                component={NextLink}
                href="/grow/small-groups"
                title="Small groups"
              >
                Learn More
              </Link>
            }
            slotProps={{
              title: { variant: "h4" },
            }}
          />
          <CardContent>
            <Typography variant="body1">
              Don't do life alone! We all need each other and that's why we have Small Groups. Small Groups are designed to connect with people and grow closer to God.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Page;

export const metadata = {
  title: `Next Steps | ${themeConfig.appDescription}`,
  description: themeConfig.appDescription,
};
