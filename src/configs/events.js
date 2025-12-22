import nextConfig from "next.config.mjs";

const Events = [
  {
    id: "comm_122125",
    src: `${nextConfig.assetPrefix}/images/communion.jpg`,
    title: "Communion",
    subheader: "Dec 21",
    timestamp: new Date(2025, 11, 21),
  },
  {
    id: "21dop_26",
    src: "https://cdn.sanity.io/images/2uj21qja/production/3d5a5bf900f9095c70de86b3a87bc23f6acf515b-2250x2250.jpg",
    title: "21 Days of Prayer",
    subheader: "Jan 4 - Jan 24",
    learnMore: "/pray",
    timestamp: new Date(2026, 0, 24),
  },
];

export default Events;
