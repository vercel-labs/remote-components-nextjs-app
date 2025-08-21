import type { NextConfig } from "next";
import { withRemoteComponents } from "remote-components/next/config";

const nextConfig: NextConfig = {
  /* config options here */
};

export default withRemoteComponents(nextConfig, {
  shared: ["@/components/provider"],
});
