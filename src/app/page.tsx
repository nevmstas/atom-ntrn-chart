import { getPrice } from "@/api/getPrice";
import { TokenPriceChart } from "@/ui";
import Headline from "@/ui/headline";
import Link from "next/link";

export default async function Home() {
  const price = await getPrice();

  return (
    <main className="flex min-h-screen flex-col items-center h-full justify-between">
      <div className="flex flex-col items-center p-24">
        <Headline text="$ATOM-$NTRN pair" />
        <TokenPriceChart data={price} />
      </div>
      <h3 className="align-bottom mb-10">
        Created by{" "}
        <Link
          className="underline"
          target="_blank"
          href="https://github.com/nevmstas"
        >
          nevmstas
        </Link>
      </h3>
    </main>
  );
}
