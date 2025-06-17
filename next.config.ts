import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // module : { exports :{
  //   images: {
  //   remotePatterns: [new URL('https://sirisapps.com/og-image.png')],
  // },
  // }},

  images: {
    domains:['sirisapps.com']
  },
};

export default nextConfig;
