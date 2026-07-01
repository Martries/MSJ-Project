import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root to this project (a stray package-lock.json in the
  // user's home folder otherwise makes Next infer the wrong root).
  turbopack: {
    root: import.meta.dirname,
  },

  // Static export — produces an `out/` folder of plain HTML/CSS/JS for Netlify.
  output: "export",

  // Required for static export: no server-side image optimization.
  images: {
    unoptimized: true,
  },

  // Keep clean URLs matching the current live site: /about (emits about.html),
  // not /about/ (which trailingSlash:true would produce). Netlify serves
  // about.html at /about, so this reproduces today's structure exactly.
  trailingSlash: false,
};

export default nextConfig;
