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

const ResourcesTable = () => {
  return (
    <Grid size={12} component={TableContainer}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Resource Name</TableCell>
            <TableCell>Author</TableCell>
            <TableCell>Content Type</TableCell>
            <TableCell>&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Personal Prayer Guide</TableCell>
            <TableCell>Church of the Highlands</TableCell>
            <TableCell>PDF</TableCell>
            <TableCell>
              <Link
                component={NextLink}
                target='_blank'
                href="/documents/pray-first-guide.pdf"
                title="Personal Prayer Guide"
              >
                <Typography variant="caption">View</Typography>
              </Link>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Children's Prayer Guide</TableCell>
            <TableCell>Church of the Highlands</TableCell>
            <TableCell>PDF</TableCell>
            <TableCell>
              <Link
                component={NextLink}
                target='_blank'
                href="/documents/childrens-prayer-guide.pdf"
                title="Children's Prayer Guide"
              >
                <Typography variant="caption">View</Typography>
              </Link>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Tabernacle Prayer</TableCell>
            <TableCell>Church of the Highlands</TableCell>
            <TableCell>PDF</TableCell>
            <TableCell>
              <Link
                component={NextLink}
                target='_blank'
                href="/documents/tabernacle-prayer.pdf"
                title="Tabernacle Prayer"
              >
                <Typography variant="caption">View</Typography>
              </Link>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>The Lord's Prayer</TableCell>
            <TableCell>Church of the Highlands</TableCell>
            <TableCell>PDF</TableCell>
            <TableCell>
              <Link
                component={NextLink}
                target='_blank'
                href="/documents/the-lords-prayer.pdf"
                title="The Lord's Prayer"
              >
                <Typography variant="caption">View</Typography>
              </Link>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Warfare Prayers</TableCell>
            <TableCell>Church of the Highlands</TableCell>
            <TableCell>PDF</TableCell>
            <TableCell>
              <Link
                component={NextLink}
                target='_blank'
                href="/documents/warfare-prayers.pdf"
                title="Warfare Prayers"
              >
                <Typography variant="caption">View</Typography>
              </Link>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>The Prayer of Jabez</TableCell>
            <TableCell>Church of the Highlands</TableCell>
            <TableCell>PDF</TableCell>
            <TableCell>
              <Link
                component={NextLink}
                target='_blank'
                href="/documents/the-prayer-of-jabez.pdf"
                title="The Prayer of Jabez"
              >
                <Typography variant="caption">View</Typography>
              </Link>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Praying Scripture</TableCell>
            <TableCell>Church of the Highlands</TableCell>
            <TableCell>PDF</TableCell>
            <TableCell>
              <Link
                component={NextLink}
                target='_blank'
                href="/documents/praying-scripture.pdf"
                title="Praying Scripture"
              >
                <Typography variant="caption">View</Typography>
              </Link>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Those Who Need God</TableCell>
            <TableCell>Church of the Highlands</TableCell>
            <TableCell>PDF</TableCell>
            <TableCell>
              <Link
                component={NextLink}
                target='_blank'
                href="/documents/those-who-need-god.pdf"
                title="Those Who Need God"
              >
                <Typography variant="caption">View</Typography>
              </Link>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>7 Basic Steps to Prayer and Fasting</TableCell>
            <TableCell>Dr. Bill Bright</TableCell>
            <TableCell>Article</TableCell>
            <TableCell>
              <Link
                component={NextLink}
                target='_blank'
                href="https://www.cru.org/us/en/train-and-grow/spiritual-growth/fasting/7-steps-to-fasting.html"
                title="7 Basic Steps to Prayer and Fasting"
              >
                <Typography variant="caption">Open</Typography>
              </Link>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Guide to Fasting and Prayer</TableCell>
            <TableCell>Dr. Bill Bright</TableCell>
            <TableCell>Article</TableCell>
            <TableCell>
              <Link
                component={NextLink}
                target='_blank'
                href="https://www.cru.org/us/en/train-and-grow/spiritual-growth/fasting/personal-guide-to-fasting.html"
                title="Guide to Fasting and Prayer"
              >
                <Typography variant="caption">Open</Typography>
              </Link>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Grid>
  );
};

export default ResourcesTable;
