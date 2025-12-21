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

const Page = () => {
  return (
    <>
      <script async
        src="https://js.stripe.com/v3/buy-button.js">
      </script>
      <Grid container paddingTop={20} paddingX={4}>
        <Grid
          size={{ xs: 12, lg: 10, xl: 8 }}
          offset={{ xs: 0, lg: 1, xl: 2 }}
          container
          spacing={4}
        >
          <Grid size={12}>
            <Typography variant="h2" textAlign="center">
              Give
            </Typography>
          </Grid>
          {/* Single */}
          <Grid size={{ xs: 12, md: 6 }} offset={{ xs: 0, md: 3 }}>
            <Stack>
              <ListItem
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography variant="button" align="center">
                  One Time Donation
                </Typography>
              </ListItem>
              <ListItem
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <stripe-buy-button
                  buy-button-id="buy_btn_1SgnpRELVoDXCwXoU8kl9Ffc"
                  publishable-key="pk_live_51SgTT5ELVoDXCwXoo99Hr4mHjENZnrqymE3g40wIooy26pENlHDU6A2m85jOkfqczBbmFk2k50zSkxeWfXQiTsKJ00CrsqbXKF"
                >
                </stripe-buy-button>
              </ListItem>
            </Stack>
          </Grid>
          {/* Weekly */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack>
              <ListItem
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography variant="button" align="center">
                  Weekly Donation
                </Typography>
              </ListItem>
              <ListItem
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <stripe-buy-button
                  buy-button-id="buy_btn_1SgnyAELVoDXCwXosyYyb1sj"
                  publishable-key="pk_live_51SgTT5ELVoDXCwXoo99Hr4mHjENZnrqymE3g40wIooy26pENlHDU6A2m85jOkfqczBbmFk2k50zSkxeWfXQiTsKJ00CrsqbXKF"
                >
                </stripe-buy-button>
              </ListItem>
            </Stack>
          </Grid>
          {/* Bi Weekly */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack>
              <ListItem
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography variant="button" align="center">
                  Bi Weekly Donation
                </Typography>
              </ListItem>
              <ListItem
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <stripe-buy-button
                  buy-button-id="buy_btn_1Sgo1dELVoDXCwXoDo8ItTdQ"
                  publishable-key="pk_live_51SgTT5ELVoDXCwXoo99Hr4mHjENZnrqymE3g40wIooy26pENlHDU6A2m85jOkfqczBbmFk2k50zSkxeWfXQiTsKJ00CrsqbXKF"
                >
                </stripe-buy-button>
              </ListItem>
            </Stack>
          </Grid>
          {/* Monthly */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack>
              <ListItem
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography variant="button" align="center">
                  Monthly Donation
                </Typography>
              </ListItem>
              <ListItem
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <stripe-buy-button
                  buy-button-id="buy_btn_1Sgo2UELVoDXCwXo5MW8QvIV"
                  publishable-key="pk_live_51SgTT5ELVoDXCwXoo99Hr4mHjENZnrqymE3g40wIooy26pENlHDU6A2m85jOkfqczBbmFk2k50zSkxeWfXQiTsKJ00CrsqbXKF"
                >
                </stripe-buy-button>
              </ListItem>
            </Stack>
          </Grid>
          {/* Yearly */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack>
              <ListItem
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography variant="button" align="center">
                  Yearly Donation
                </Typography>
              </ListItem>
              <ListItem
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <stripe-buy-button
                  buy-button-id="buy_btn_1Sgo4QELVoDXCwXoFIZwSU4M"
                  publishable-key="pk_live_51SgTT5ELVoDXCwXoo99Hr4mHjENZnrqymE3g40wIooy26pENlHDU6A2m85jOkfqczBbmFk2k50zSkxeWfXQiTsKJ00CrsqbXKF"
                >
                </stripe-buy-button>
              </ListItem>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Page;

export const metadata = {
  title: `Give | ${themeConfig.appDescription}`,
  description: themeConfig.appDescription,
};
