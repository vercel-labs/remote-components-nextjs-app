"use client";

import { RemoteComponent } from "remote-components/next/host/client";

export default function RemoteClientCounter() {
  return (
    <RemoteComponent src="http://localhost:4000/remote-components/counter?name=client" />
  );
}
