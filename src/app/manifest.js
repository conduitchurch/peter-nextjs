export default function manifest() {
  return {
    name: 'Conduit Church',
    short_name: 'Conduit Church',
    description: 'Conduit Church Website',
    start_url: '/',
    display: 'standalone',
    background_color: '#f8f8f8',
    theme_color: '#1f1b20',
    icons: [
      {
        src: '/pwa/manifest_192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/pwa/manifest_512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}