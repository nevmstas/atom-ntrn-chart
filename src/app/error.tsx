"use client";

import { useEffect } from "react";
import Image from "next/image";
import imagePath from "../assets/robot.png";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center mt-40 gap-10">
      <Image
        src={imagePath}
        width={500}
        height={500}
        alt="Picture of the author"
      />

      <h2>Something went wrong!</h2>
      <button
        className="border-white border-2 p-2 hover:bg-slate-900"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}
