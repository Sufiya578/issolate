

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.dummyjson.com",
       
        //  { protocol: "https", hostname: "api.yourbackend.com" },
      },
    ],
  },
   reactCompiler: true,
};

export default nextConfig;
