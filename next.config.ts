import type { NextConfig } from "next";
import { hostname } from "os";

const nextConfig: NextConfig = {
  /* config options here */

  // in case want to use downloaded resource: specify host name like below
  // images: {
  //   remotePatterns: [{hostname: 'whatever'}]
  // }
};

export default nextConfig;
