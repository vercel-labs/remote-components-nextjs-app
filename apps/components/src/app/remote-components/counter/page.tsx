import Counter from "@/components/counter";
import { RemoteComponent } from "remote-components/next/remote";

export default async function CounterPage({
  searchParams,
}: {
  searchParams?: Promise<{ name?: string }>;
}) {
  const resolvedSearchParams = await searchParams;
  return (
    <RemoteComponent>
      <Counter>
        <div className="flex flex-col items-center">
          <span>Remote</span>
          {resolvedSearchParams?.name ? (
            <span>({resolvedSearchParams.name})</span>
          ) : null}
        </div>
      </Counter>
    </RemoteComponent>
  );
}
