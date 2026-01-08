"use client";

import { Box, styled } from "@mui/material";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from 'embla-carousel-auto-scroll'


const Embla = styled(Box)(({ theme }) => ({
  overflow: "hidden",
  width: '100%'
}));

const EmblaContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  width: '100%'
}));

const EmblaSlide = styled(Box)(({ theme }) => ({
  flex: "0 0 100%",
  minWidth: 0,
}));


const Carousel = ({ slides }) => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [AutoScroll({ startDelay: 0, })]);


  return (
    <Embla ref={emblaRef}>
      <EmblaContainer>
        { slides.map((slide, i) => (
          <EmblaSlide key={i}>{ slide }</EmblaSlide>
        ))}
      </EmblaContainer>
    </Embla>
  );
};

export default Carousel;
