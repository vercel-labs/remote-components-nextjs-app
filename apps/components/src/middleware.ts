import {
  withRemoteComponents,
  config,
} from "remote-components/next/middleware";

const middleware = withRemoteComponents();
export { config, middleware };
