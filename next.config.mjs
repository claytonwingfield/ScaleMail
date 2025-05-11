/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "http", // ↔ 'https' in prod
        hostname: "192.168.0.231",
        port: "1337",
        pathname: "/uploads/**", // allow any file under /uploads/
      },
    ],
  },
};

export default nextConfig;
