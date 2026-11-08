/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
    optimizePackageImports: ["@react-three/drei", "react-icons"],
  }
};

export default nextConfig;


// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   webpack: (config) => {
//     config.resolve.fallback = {
//       ...config.resolve.fallback,
//       process: false,
//     };
//     return config;
//   },
// };

// export default nextConfig;
