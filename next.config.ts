import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Falha o build se houver erro de tipo. Um portfolio quebrado no ar e
  // pior do que um deploy que nao acontece.
  typescript: { ignoreBuildErrors: false },
};

export default nextConfig;
