"use client";

import * as React from "react";

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
  IconButton,
  Link,
  ListItem,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import nextConfig from "next.config.mjs";
import { Close } from "@mui/icons-material";
import FastingScripture from "./FastingScripture";
import ResourcesTable from "./ResourcesTable";

const PrayerTabs = () => {
  const [tab, setTab] = React.useState(0);

  return (
    <Grid container spacing={4}>
      <Grid size={{ sm: 12, md: 3 }}>
        <Card>
          <CardContent>
            <Stack>
              <ListItem>
                <Button
                  variant="contained"
                  size="small"
                  onClick={() => setTab(0)}
                  color={tab === 0 ? "secondary" : undefined}
                >
                  How it works
                </Button>
              </ListItem>
              <ListItem>
                <Button
                  variant="contained"
                  size="small"
                  onClick={() => setTab(1)}
                  color={tab === 1 ? "secondary" : undefined}
                >
                  Fellowship Online
                </Button>
              </ListItem>
              <ListItem>
                <Button
                  variant="contained"
                  size="small"
                  onClick={() => setTab(2)}
                  color={tab === 2 ? "secondary" : undefined}
                >
                  Fasting
                </Button>
              </ListItem>
              <ListItem>
                <Button
                  variant="contained"
                  size="small"
                  onClick={() => setTab(3)}
                  color={tab === 3 ? "secondary" : undefined}
                >
                  Resources
                </Button>
              </ListItem>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
      <Grid size={{ sm: 12, md: 9 }}>
        {tab === 0 && (
          <Card>
            <CardHeader title="Prayer is our first response, not our last resort." />
            <CardContent>
              <Typography>
                We, along side churches across America, have set aside 21 days
                to intentionally seek God in prayer and believe for Him to move
                in powerful ways.
              </Typography>
              <Divider />
              <Typography>
                Each morning, we dedicate an hour for personal prayer time, and
                worship. During this time, we will be able to fellowship online
                with Church of the Highlands, in Alabama.
              </Typography>
              <Divider />
              <Typography>
                We would love for you to take part in 21 Days of Prayer!
              </Typography>
            </CardContent>
          </Card>
        )}
        {tab === 1 && (
          <Card>
            <CardHeader title="Fellowship Online" subheader="Coming Soon!" />
          </Card>
        )}
        {tab === 2 && (
          <Card>
            <CardHeader
              title="The goal of fasting is to draw near to God."
              subheader="It hits the reset button of our soul and renews us from the inside out."
            />
            <CardContent>
              <Typography>
                Fasting enables us to celebrate the goodness and mercy of God.
                It prepares our hearts for all the good things God desires to
                bring into our lives.
              </Typography>
              <br />
              <Typography>
                When deciding on a fast, we encourage you to seek God in prayer
                and follow what the Holy Spirit leads you to do.
              </Typography>
              <br />
              <FastingScripture />
              <br />
              <Typography variant="h5" align="center">
                Types of Fasts
              </Typography>
              <br />
              <Grid container spacing={4}>
                <Grid size={{ sm: 12, md: 6 }}>
                  <Card sx={{ marginBottom: 4 }}>
                    <CardHeader
                      title="Selective Fast"
                      subheader="This type of fast involves removing certain elements from your diet. One example of a selective fast is the Daniel Fast, during which you remove meat, sweets, and bread from your diet and consume water and juice for fluids and fruits and vegetables for food."
                    />
                  </Card>
                  <Card>
                    <CardHeader
                      title="Partial Fast"
                      subheader={`This fast is sometimes called the "Jewish Fast" and involves abstaining from eating any type of food in the morning and afternoon. This can either correlate to specific times of the day, such as 6:00 am to 3:00 pm, or from sunup to sundown.`}
                    />
                  </Card>
                </Grid>
                <Grid size={{ sm: 12, md: 6 }}>
                  <Card sx={{ marginBottom: 4 }}>
                    <CardHeader
                      title="Complete Fast"
                      subheader="In this type of fast, you drink only liquids, typically water with light juices as an option."
                    />
                  </Card>
                  <Card>
                    <CardHeader
                      title="Soul Fast"
                      subheader="This fast is a great option if you do not have much experience fasting food, have health issues that prevent you from fasting food, or if you wish to refocus certain areas of your life that are out of balance. For example, you might choose to stop using social media or watching television for the duration of the fast and then carefully bring that element back into your life in healthy doses at the conclusion of the fast."
                    />
                  </Card>
                </Grid>
              </Grid>
              <br />
              <Typography variant="h5">
                The timing of your fast is not as important as the strength of
                your focus on God as you fast.
              </Typography>
            </CardContent>
          </Card>
        )}
        {tab === 3 && (
          <Card>
            <CardHeader
              title="Learn more about strengthening your prayer life."
              subheader="Use these resources to help bring joy into your time with God."
            />
            <CardContent>
              <Grid container spacing={4}>
                <Grid size={12}>
                  <Typography variant="h5" align="center">
                    It's our hope that your prayer life becomes more natural,
                    effective, and enjoyable.
                  </Typography>
                </Grid>
                <ResourcesTable />
              </Grid>
            </CardContent>
          </Card>
        )}
        <br />
      </Grid>
    </Grid>
  );
};

export default PrayerTabs;
