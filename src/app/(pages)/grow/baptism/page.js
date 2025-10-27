
import themeConfig from "@/configs/themeConfig";
import NextLink from "next/link";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Link,
  Stack,
  Typography
} from "@mui/material";
import nextConfig from "next.config.mjs";
import { ArrowDropDown, Circle } from "@mui/icons-material";


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
            Baptism
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 8 }} offset={{ xs: 0, md: 2 }}>
          <Typography variant="h6" textAlign="center">
            What is Baptism?
          </Typography>
          <br />
          <Typography variant="body1" textAlign="justified">
            Baptism is an important step of obedience that shows others we have personally trusted Jesus for our salvation. Jesus was baptized when He was on the earth, and we do this to follow His example. When Christians are baptized, they are submerged under water to identify with the death and burial of Jesus and raised out of the water to identify with His resurrection.
          </Typography>
          <br />
        </Grid>
        <Grid size={{ xs: 12, md: 10 }} offset={{ xs: 0, md: 1 }}>
          <Typography variant="h6">
            Baptism Facts:
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 10 }} offset={{ xs: 0, md: 1 }}>
          <Stack>
            <Accordion sx={{ border: "solid 0px transparent" }}>
              <AccordionSummary expandIcon={<ArrowDropDown />}>Why be baptized?</AccordionSummary>
              <AccordionDetails sx={{ paddingLeft: 4, paddingRight: 4 }}>
                <Typography>Those who are baptized are following Jesus' example and obeying His command.</Typography>
                <Typography variant="subtitle1" paddingLeft={4}>
                    When Jesus was baptized, he went up immediately from the water. The heavens suddenly opened for him, and he saw the Spirit of God descending like a dove and coming down on him. And a voice from heaven said, "This is my beloved Son, with whom I am well-pleased."" -- Matthew 3:16-17 (CSB)
                </Typography>
                <br />
                <Typography variant="subtitle1" paddingLeft={4}>
                    Jesus came near and said to them, "All authority has been given to me in heaven and on earth. Go, therefore, and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, teaching them to observe everything I have commanded you. And remember, I am with you always, to the end of the age." -- Matthew 28:18-20 (CSB)
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{ border: "solid 0px transparent"}}>
              <AccordionSummary expandIcon={<ArrowDropDown />}>What is the significance of baptism?</AccordionSummary>
              <AccordionDetails sx={{ paddingLeft: 4, paddingRight: 4 }}>
                <br />
                <Typography><b>You are a follower of Jesus Christ.</b></Typography>
                <Typography variant="subtitle1" paddingLeft={4}>
                    So those who accepted his message were baptized -- Acts 2:41a (CSB)
                </Typography>
                <br />
                <Typography><b>You are beginning a changed life in Christ.</b></Typography>
                <Typography variant="subtitle1" paddingLeft={4}>
                    Therefore we were buried with him by baptism into death, in order that, just as Christ was raised from the dead by the glory of the Father, so we too may walk in newness of life.  -- Romans 6:4 (CSB)
                </Typography>
                <br />
                <Typography><b>You are part of a new family.</b></Typography>
                <Typography variant="subtitle1" paddingLeft={4}>
                    The law, then, was our guardian until Christ, so that we could be justified by faith. 25 But since that faith has come, we are no longer under a guardian, for through faith you are all sons of God in Christ Jesus. For those of you who were baptized into Christ have been clothed with Christ. -- Galatians 3:24-27 (CSB)
                </Typography>
                <br />
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{ border: "solid 0px transparent"}}>
              <AccordionSummary expandIcon={<ArrowDropDown />}>I have already been baptized. Should I be baptized again?</AccordionSummary>
              <AccordionDetails>
                <Typography>Your baptism should have signified you becoming a follower of Jesus, beginning a changed life, and uniting with a new family. If your baptism did not reflect this change of life, then you should be baptized again.</Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{ border: "solid 0px transparent"}}>
              <AccordionSummary expandIcon={<ArrowDropDown />}>Can my child be baptized?</AccordionSummary>
              <AccordionDetails>
                <Typography>We will baptize anyone over age 7 who understands what baptism symbolizes and wants to make that personal public declaration. We encourage any parents to partner with our Conduit Kids and Overcharge Students ministries to guide your children through these decisions of faith.</Typography>
                <br />
                <Typography>For more information to help guide your child through this important decision, check out our <Link href='/documents/childrens-baptism-guide.pdf' title="Children's Baptism Guide" target="_blank">Children's Baptism Guide</Link></Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{ border: "solid 0px transparent"}}>
              <AccordionSummary expandIcon={<ArrowDropDown />}>Can my infant be baptized?</AccordionSummary>
              <AccordionDetails>
                <Typography>Throughout the New Testament, the Bible teaches that baptism is a public expression of worship symbolizing the new life we have when we follow Jesus. In the Bible we see that Jesus' parents dedicated him to the Lord (Luke 2:22-40), and he was later baptized as an adult (Matthew 3:16-17).</Typography>
                <br />
                <Typography>We understand that some churches practice “baptism of confirmation” for children. This ceremony is intended to be a commitment between the parents and God on the behalf of the child. The parents promise to raise their child in the faith until the child is old enough to make his or her own personal confession of Christ. This custom began about 300 years after the Bible was completed and is different from the biblical examples of new believers being baptized to publicly profess their faith in Jesus.</Typography>
              </AccordionDetails>
            </Accordion>
          </Stack>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Page;

export const metadata = {
  title: `Baptism | ${themeConfig.appDescription}`,
  description: themeConfig.appDescription,
};
