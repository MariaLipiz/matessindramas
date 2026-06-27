"use client";

import { useState } from "react";
import Link from "next/link";
import OfferCountdown from "@/components/OfferCountdown";

const STORAGE_KEY = "mmi-offer-deadline-v1";

export default function BuyBlockLimites() {
  const [expired, setExpired] = useState(false);

  return (
    <div className="space-y-6">
      <p className="inline-block bg-[#b0e4fc] px-2 py-1 text-3xl font-bold tracking-tighter sm:text-4xl">
        Bajate cualquier límite
      </p>

      <OfferCountdown
        storageKey={STORAGE_KEY}
        durationMinutes={15}
        onExpireChange={setExpired}
      />

      {!expired && (
        <Link
          href="https://buy.stripe.com/cNi5kD1Pi9BO4O98zEdEs08"
          className="inline-block rounded-lg bg-[#0B1633] px-8 py-4 text-xl font-semibold text-white transition hover:opacity-95"
        >
          Comprar ahora la guía por 9 €
        </Link>
      )}
    </div>
  );
}