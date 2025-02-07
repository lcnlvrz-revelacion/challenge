/** @type {import('next').NextConfig} */
module.exports = {
  transpilePackages: ["@repo/ui"],
  rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:3001/:path*",
      },
    ];
  },
};
