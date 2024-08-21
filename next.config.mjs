/** @type {import('next').NextConfig} */
const nextConfig = {
<<<<<<< HEAD
  experimental: {
    staleTimes: {
      dynamic: 30,
    },
  },
=======
>>>>>>> 39f574211871bd38a767e60931e8f3e1a1d1544c
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "files.edgestore.dev",
      },
    ],
  },
};

export default nextConfig;
