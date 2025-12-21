"use client";

import NextLink from "next/link";
import {
  Grid,
  Box,
  List,
  useTheme,
  ListItem,
  Typography,
  IconButton,
  Divider,
  useMediaQuery,
  Link,
} from "@mui/material";
import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";
import themeConfig from "@/configs/themeConfig";
import nextConfig from "next.config.mjs";

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid container spacing={5} padding={5} sx={{ alignItems: "stretch" }}>
      <Grid size={{ xs: 6, md: 3, lg: 2 }} offset={{ xs: 0, md: 0, lg: 1 }}>
        <List>
          <ListItem>
            <Typography
              sx={{ color: theme.palette.secondary.main }}
              variant="body2"
            >
              <b>About</b>
            </Typography>
          </ListItem>
          <ListItem>
            <Link
              href="/about"
              title={`About ${themeConfig.appName}`}
              component={NextLink}
            >
              <Typography variant="caption">
                About {themeConfig.appName}
              </Typography>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/beliefs" title="Beliefs" component={NextLink}>
              <Typography variant="caption">Beliefs</Typography>
            </Link>
          </ListItem>
          {/* <ListItem>
            <Link href="/leadership" title="Leadership" component={NextLink}>
              <Typography variant="caption">Leadership</Typography>
            </Link>
          </ListItem> */}
          {/* <ListItem>
            <Link
              href="/ministry/kids"
              title="Conduit Kids"
              component={NextLink}
            >
              <Typography variant="caption">Conduit Kids</Typography>
            </Link>
          </ListItem> */}
          {/* <ListItem>
            <Link
              href="/ministry/students"
              title="Overcharge Students"
              component={NextLink}
            >
              <Typography variant="caption">Overcharge Students</Typography>
            </Link>
          </ListItem> */}
          {/* <ListItem>
            <Link
              href="/ministry/young-adults"
              title="Young Adults"
              component={NextLink}
            >
              <Typography variant="caption">Young Adults</Typography>
            </Link>
          </ListItem> */}
          {/* <ListItem>
            <Link
              href="/ministry/marriage-family"
              title="Marriage and Family"
              component={NextLink}
            >
              <Typography variant="caption">Marriage and Family</Typography>
            </Link>
          </ListItem> */}
          {/* <ListItem>
            <Link href="/contact-us" title="Contact Us" component={NextLink}>
              <Typography variant="caption">Contact Us</Typography>
            </Link>
          </ListItem> */}
        </List>
      </Grid>
      <Grid size={{ xs: 6, md: 3, lg: 2 }}>
        <List>
          <ListItem>
            <Typography
              sx={{ color: theme.palette.secondary.main }}
              variant="body2"
            >
              <b>Next Steps</b>
            </Typography>
          </ListItem>
          <ListItem>
            <Link href="/next-steps" title="Next Steps" component={NextLink}>
              <Typography variant="caption">Next Steps</Typography>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/give" title="Give" component={NextLink}>
              <Typography variant="caption">Give</Typography>
            </Link>
          </ListItem>
          {/* <ListItem>
            <Link href="/grow/baptism" title="Baptism" component={NextLink}>
              <Typography variant="caption">Baptism</Typography>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="/grow/discipleship"
              title="Discipleship"
              component={NextLink}
            >
              <Typography variant="caption">Discipleship</Typography>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="/grow/serve-team"
              title="Serve Team"
              component={NextLink}
            >
              <Typography variant="caption">Serve Team</Typography>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="/grow/small-groups"
              title="Small Groups"
              component={NextLink}
            >
              <Typography variant="caption">Small Groups</Typography>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/prayer-wall" title="Prayer Wall" component={NextLink}>
              <Typography variant="caption">Prayer Wall</Typography>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="/your-story"
              title="Share Your Story"
              component={NextLink}
            >
              <Typography variant="caption">Share Your Story</Typography>
            </Link> 
          </ListItem> */}
        </List>
      </Grid>
      <Grid
        size={{ xs: 4, md: 3 }}
        offset={{ xs: 4, md: 3 }}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignContent: "space-between",
        }}
      >
        <Box sx={{ textAlign: isMobile ? "center" : "right" }}>
          <img
            src={`${nextConfig.assetPrefix}/images/logo.svg`}
            alt="logo"
            style={{ width: "50%", height: "auto", opacity: '50%' }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: isMobile ? "center" : "flex-end",
              alignItems: "center",
              gap: 3,
            }}
          >
            <IconButton>
              <Facebook />
            </IconButton>
            <IconButton>
              <Instagram />
            </IconButton>
            <IconButton>
              <Twitter />
            </IconButton>
            <IconButton>
              <YouTube />
            </IconButton>
          </Box>
        </Box>
      </Grid>
      <Grid size={12}>
        <Divider sx={{ textAlign: "right" }}>
          &copy; {themeConfig.appName} Church 2025
        </Divider>
      </Grid>
    </Grid>
  );
};

export default Footer;
