import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  turbopack: {
    // Pin the workspace root: a stray lockfile in a parent OneDrive folder
    // otherwise makes Next.js guess (and warn) at the project root.
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
