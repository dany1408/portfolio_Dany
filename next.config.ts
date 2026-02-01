import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [

      {
        source: '/contacto',
        destination: '/#contacto',
        permanent: true,
      },
      {
        source: '/sobre-mi',
        destination: '/#sobre-mi', // Note: I need to ensure About section has this ID
        permanent: true,
      },
      {
        source: '/services',
        destination: '/#servicios',
        permanent: true,
      },
      {
        source: '/contact',
        destination: '/#contacto',
        permanent: true,
      },
      // Fix for stale cached image requests
      {
        source: '/images/projects/Rincon-ktracho.jpg',
        destination: '/images/projects/proyecto1_Rincon-ktracho.jpg',
        permanent: true, // Cache this redirect forever so it stops asking
      },
      {
        source: '/assets/logo-edusalud.png',
        destination: '/favicon.ico', // Redirect to existing file to silence 404
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
