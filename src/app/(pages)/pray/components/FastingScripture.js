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
  Typography,
} from "@mui/material";
import nextConfig from "next.config.mjs";
import { Close } from "@mui/icons-material";

const FastingScripture = () => {
  const [scripture, setScripture] = React.useState(0);

  return (
    <Grid container spacing={2} columns={5}>
    <Grid
        size={1}
        sx={{ display: "flex", justifyContent: "center" }}
    >
        <Button
        onClick={() => setScripture((old) => (old !== 1 ? 1 : 0))}
        size="small"
        variant="contained"
        color={scripture === 1 ? 'secondary' : undefined}
        >
        Matthew 6:16-18
        </Button>
    </Grid>
    <Grid
        size={1}
        sx={{ display: "flex", justifyContent: "center" }}
    >
        <Button
        onClick={() => setScripture((old) => (old !== 2 ? 2 : 0))}
        size="small"
        variant="contained"
        color={scripture === 2 ? 'secondary' : undefined}
        >
        Matthew 9:14-15
        </Button>
    </Grid>
    <Grid
        size={1}
        sx={{ display: "flex", justifyContent: "center" }}
    >
        <Button
        onClick={() => setScripture((old) => (old !== 3 ? 3 : 0))}
        size="small"
        variant="contained"
        color={scripture === 3 ? 'secondary' : undefined}
        >
        Luke 18:9-14
        </Button>
    </Grid>
    <Grid
        size={1}
        sx={{ display: "flex", justifyContent: "center" }}
    >
        <Button
        onClick={() => setScripture((old) => (old !== 4 ? 4 : 0))}
        size="small"
        variant="contained"
        color={scripture === 4 ? 'secondary' : undefined}
        >
        Acts 27:33-37
        </Button>
    </Grid>
    <Grid
        size={1}
        sx={{ display: "flex", justifyContent: "center" }}
    >
        <Button
        onClick={() => setScripture((old) => (old !== 5 ? 5 : 0))}
        size="small"
        variant="contained"
        color={scripture === 5 ? 'secondary' : undefined}
        >
        Nehemiah 9:1-3
        </Button>
    </Grid>
    {scripture === 1 && (
        <>
        <Grid size={5}>
            <Divider textAlign="right">
            <IconButton size='small' onClick={() => setScripture(0)}>
                <Close fontSize="12pt" />
            </IconButton>
            </Divider>
        </Grid>
        <Grid size={5}>
            <Typography align="left" variant='subtitle2'>
            Whenever you fast, don't be gloomy like the hypocrites. For they disfigure their faces so that their fasting is obvious to people. Truly I tell you, they have their reward. But when you fast, put oil on your head and wash your face, 18 so that your fasting isn't obvious to others but to your Father who is in secret. And your Father who sees in secret will reward you.
            </Typography>
            <Typography align="right">
            Matthew 6:16-18 (CSB)
            </Typography>
        </Grid>
        </>
    )}
    {scripture === 2 && (
        <>
        <Grid size={5}>
            <Divider>
            <IconButton onClick={() => setScripture(0)}>
                <Close />
            </IconButton>
            </Divider>
        </Grid>
        <Grid size={5}>
            <Typography align="left" variant='subtitle2'>
            Then John's disciples came to him, saying, "Why do we and the Pharisees fast often, but your disciples do not fast?" Jesus said to them, "Can the wedding guests be sad while the groom is with them? The time will come when the groom will be taken away from them, and then they will fast.."
            </Typography>
            <Typography align="right">
            Matthew 9:14-15 (CSB)
            </Typography>
        </Grid>
        </>
    )}
    {scripture === 3 && (
        <>
        <Grid size={5}>
            <Divider>
            <IconButton onClick={() => setScripture(0)}>
                <Close />
            </IconButton>
            </Divider>
        </Grid>
        <Grid size={5}>
            <Typography align="left" variant='subtitle2'>
            He also told this parable to some who trusted in themselves that they were righteous and looked down on everyone else: "Two men went up to the temple to pray, one a Pharisee and the other a tax collector. The Pharisee was standing and praying like this about himself: "God, I thank you that I'm not like other people - greedy, unrighteous, adulterers, or even like this tax collector. I fast twice a week; I give a tenth of everything I get." But the tax collector, standing far off, would not even raise his eyes to heaven but kept striking his chest and saying, "God, have mercy on me, a sinner!" I tell you, this one went down to his house justified rather than the other, because everyone who exalts himself will be humbled, but the one who humbles himself will be exalted.
            </Typography>
            <Typography align="right">Luke 18:9-14 (CSB)</Typography>
        </Grid>
        </>
    )}
    {scripture === 4 && (
        <>
        <Grid size={5}>
            <Divider>
            <IconButton onClick={() => setScripture(0)}>
                <Close />
            </IconButton>
            </Divider>
        </Grid>
        <Grid size={5}>
            <Typography align="left" variant='subtitle2'>
            When it was about daylight, Paul urged them all to take food, saying, "Today is the fourteenth day that you have been waiting and going without food, having eaten nothing. So I urge you to take some food. For this is for your survival, since none of you will lose a hair from your head." After he said these things and had taken some bread, he gave thanks to God in the presence of all of them, and after he broke it, he began to eat. They all were encouraged and took food themselves. In all there were 276 of us on the ship.
            </Typography>
            <Typography align="right">Acts 27:33-37 (CSB)</Typography>
        </Grid>
        </>
    )}
    {scripture === 5 && (
        <>
        <Grid size={5}>
            <Divider>
            <IconButton onClick={() => setScripture(0)}>
                <Close />
            </IconButton>
            </Divider>
        </Grid>
        <Grid size={5}>
            <Typography align="left" variant='subtitle2'>
            On the twenty-fourth day of this month the Israelites assembled; they were fasting, wearing sackcloth, and had put dust on their heads. Those of Israelite descent separated themselves from all foreigners, and they stood and confessed their sins and the iniquities of their ancestors. While they stood in their places, they read from the book of the law of the Lord their God for a fourth of the day and spent another fourth of the day in confession and worship of the Lord their God.
            </Typography>
            <Typography align="right">
            Nehemiah 9:1-3 (CSB)
            </Typography>
        </Grid>
        </>
    )}
    </Grid>
  )
};

export default FastingScripture;
