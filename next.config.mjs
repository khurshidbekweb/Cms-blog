/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'eu-west-2.graphassets.com',
          },
        ],
      },
};

export default nextConfig;
