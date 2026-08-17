/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  devIndicators: false,
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "blogstudio.s3.theshoppad.net",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "www.forkinthekitchen.com",
      },
      {
        protocol: "https",
        hostname: "www.eatingbirdfood.com",
      },
      {
        protocol: "https",
        hostname: "aplus.web.tr",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
      },
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
      },
      {
        protocol: "https",
        hostname: "dropinblog.net",
      },
      {
        protocol: "https",
        hostname: "athome.starbucks.com",
      },
      {
        protocol: "https",
        hostname: "www.allrecipes.com",
      },
      {
        protocol: "https",
        hostname: "www.peanutbutterandfitness.com",
      },
      {
        protocol: "https",
        hostname: "antdisplay.com",
      },
      {
        protocol: "https",
        hostname: "idbinvest.org",
      },
      {
        protocol: "https",
        hostname: "media.architecturaldigest.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "frostingandfettuccine.com",
      }
    ],
  }
};



export default nextConfig;
