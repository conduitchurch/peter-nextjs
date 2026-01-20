"use client";

import * as React from 'react'

import { Box, styled, Chip } from "@mui/material";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import Head from "next/head";

const Embla = styled(Box)(({ theme }) => ({
  overflow: "hidden",
  width: "100%",
  position: 'relative'
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
  position: "absolute",
  bottom: '5%',
  right: '5%'
}));

const EmblaDots = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "flex-end",
  alignItems: "center",
  gap: 3
}));

const DotButton = styled(Chip)(({ theme }) => ({
  height: "1em",
  width: "1em",
}));

const Carousel = ({ slides }) => {

  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const [scrollSnaps, setScrollSnaps] = React.useState([])

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000 }),
    Fade()
  ]);

  const onDotButtonClick = React.useCallback(
    (index) => {
      if (!emblaApi) return
      emblaApi.scrollTo(index)
    },
    [emblaApi]
  )

  const onInit = React.useCallback((emblaApi) => {
    setScrollSnaps(emblaApi.scrollSnapList())
  }, [])

  const onSelect = React.useCallback((emblaApi) => {
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [])

  React.useEffect(() => {
    if (!emblaApi) return

    onInit(emblaApi)
    onSelect(emblaApi)
    emblaApi.on('reInit', onInit).on('reInit', onSelect).on('select', onSelect)
  }, [emblaApi, onInit, onSelect])

  return (
    <>
      <Head>
      { slides.map((slide, i) => (
        <link
          rel='preload'
          href={`https://theconduit.church/${slide.src}`}
          as='image'
        />
      ))}
      </Head>
      <Embla ref={emblaRef}>
        <EmblaContainer>
          {slides.map((slide, i) => (
            <EmblaSlide key={i}>{slide}</EmblaSlide>
          ))}
        </EmblaContainer>
        <EmblaControls>
          <EmblaDots>
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                color={index === selectedIndex ? "bright" : "gray"}
                sx={{ border: index !== selectedIndex ? 'solid 1px white' : undefined }}
              />
            ))}
          </EmblaDots>
        </EmblaControls>
      </Embla>
    </>
  );
};

export default Carousel;
