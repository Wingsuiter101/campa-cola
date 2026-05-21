import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const repoName = "campa-cola";

const githubBasePath = isGitHubPages ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  output: isGitHubPages ? "export" : undefined,
  basePath: githubBasePath || undefined,
  assetPrefix: isGitHubPages ? `${githubBasePath}/` : undefined,
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: githubBasePath,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
