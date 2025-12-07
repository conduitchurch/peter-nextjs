"use client";

import Image from "next/image";
import {
  Grid,
  Menu,
  MenuItem,
  Typography,
  Button,
  Link,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import fonts from "@/@core/theme/fonts";
import themeConfig from "@/configs/themeConfig";
import AboutMenu from "./components/AboutMenu";
import GrowMenu from "./components/GrowMenu";
import NextLink from "next/link";
import MobileMenu from "./components/MobileMenu";
import nextConfig from "next.config.mjs";

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 2,
          width: "100%",
          borderBottom: `solid 4px ${theme.palette.secondary.main}`,
          bgcolor: theme.palette.background.default
        }}
    >
      <Grid
        container
        spacing={0}
        paddingX={6}
        paddingY={2}
        component={Box}
        sx={{
          width: "100%",
          borderBottom: `solid 4px ${theme.palette.primary.main}`,
          bgcolor: theme.palette.background.default
        }}
      >
        <Grid
          size={{ xs: 6, md: 3 }}
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            gap: 3,
          }}
          className={fonts.logo.className}
        >
          <Link href="/" sx={{ height: 50, width: 50, textDecoration: "none !important" }} component={NextLink}>
            <img
              src={`${nextConfig.assetPrefix}/images/logo.svg`}
              alt="Conduit Church"
              height={50}
            />
          </Link>
          <Link href="/" component={NextLink} sx={{ textDecoration: "none !important"}}>
            <Typography
              variant="h3"
              sx={{ fontWeight: 500, textTransform: "lowercase" }}
            >
              {themeConfig.appName}
            </Typography>
          </Link>
        </Grid>
        {!isMobile && (
          <Grid
            size={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              columnGap: 1,
            }}
          >
            <AboutMenu />
            <GrowMenu />
            <Link href="/visit" title="Visit" component={NextLink}>
              <Button variant="outlined" sx={{ textTransform: 'lowercase' }}>Visit</Button>
            </Link>
            <Link href="/events" title="Events" component={NextLink}>
              <Button sx={{ textTransform: 'lowercase' }}>Events</Button>
            </Link>
            <Link href="/give" title="Give" component={NextLink}>
              <Button sx={{ textTransform: 'lowercase' }}>Give</Button>
            </Link>
          </Grid>
        )}
        {isMobile && (
          <Grid
            size={{ xs: 6, md: 3 }}
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <MobileMenu />
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default Header;
