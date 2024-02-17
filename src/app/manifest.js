export default function manifest() {
  return {
    name: "Virtual Epoch",
    short_name: "Virtual Epoch",
    description: "Virtual Epoch App Created with Next.js",
    id: "/",
    start_url: "/",
    display: "standalone",
    background_color: "#000",
    theme_color: "#000",
    icons: [
      {
        src: "/logos/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
      {
        src: "/logos/16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        src: "/logos/32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/logos/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/logos/192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/logos/512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
