/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // prevents broken Image src in static build
  },
};

export default nextConfig;
