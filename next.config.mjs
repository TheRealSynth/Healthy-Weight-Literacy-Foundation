/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/photo-**",
      },
    ],
    domains: ["images.unsplash.com"],
  },
  async redirects() {
    return [
      // Common slug variations
      {
        source: "/cityresources",
        destination: "/city-resources",
        permanent: true,
      },
      {
        source: "/resources",
        destination: "/city-resources",
        permanent: true,
      },
      {
        source: "/articles",
        destination: "/education",
        permanent: true,
      },
      {
        source: "/learn",
        destination: "/education",
        permanent: true,
      },
      {
        source: "/telehealth",
        destination: "/telehealth-intake",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
