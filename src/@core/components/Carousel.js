"use client";

import { Box, styled, Chip } from "@mui/material";
import useEmblaCarousel from "embla-carousel-react";
// import AutoScroll from 'embla-carousel-auto-scroll'
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";

const Embla = styled(Box)(({ theme }) => ({
  overflow: "hidden",
  width: "100%",
}));

const EmblaContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "100%",
}));

const EmblaSlide = styled(Box)(({ theme }) => ({
  flex: "0 0 100%",
  minWidth: 0,
}));

const EmblaControls = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "auto 1fr",
  justifyContent: "space-between",
  gap: "1.2rem",
  marginTop: "1.8rem",
}));

const EmblaDots = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "flex-end",
  alignItems: "center",
  marginRight: "calc((2.6rem - 1.4rem) / 2 * -1)",
}));

const DotButton = styled(Chip)(({ theme }) => ({
  height: ".75em",
  width: ".75em",
}));

const Carousel = ({ slides }) => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000 }),
    Fade()
  ]);

  return (
    <>
      <Embla ref={emblaRef}>
        <EmblaContainer>
          {slides.map((slide, i) => (
            <EmblaSlide key={i}>{slide}</EmblaSlide>
          ))}
        </EmblaContainer>
      </Embla>
      {/* <EmblaControls>
        <EmblaDots>
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              color={index === selectedIndex ? "bright" : "gray"}
            />
          ))}
        </EmblaDots>
      </EmblaControls> */}
    </>
  );
};

export default Carousel;
