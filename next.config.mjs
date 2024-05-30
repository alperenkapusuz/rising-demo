/** @type {import('next').NextConfig} */

import dotenv from 'dotenv';
dotenv.config({
  path: `./.env.${process.env.NODE_ENV}`,
});

const nextConfig = {
    env: {
        API_URL: process.env.API_URL,
        PUBLIC_URL: process.env.PUBLIC_URL,
    },
    images: {
      domains: [process.env.PUBLIC_URL],
      unoptimized: true,
    },
    output: "standalone",
    trailingSlash: true,
    poweredByHeader: false
};

export default nextConfig;
