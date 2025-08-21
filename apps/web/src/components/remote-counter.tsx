import { RemoteComponent } from "remote-components/next/host";

export default function RemoteCounter() {
  return (
    <RemoteComponent src="http://localhost:4000/remote-components/counter?name=server" />
  );
}
