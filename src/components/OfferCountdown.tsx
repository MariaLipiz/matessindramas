"use client";

import { useEffect, useMemo, useState } from "react";

type OfferCountdownProps = {
  storageKey: string;
  durationMinutes?: number;
  onExpireChange?: (expired: boolean) => void;
};

export default function OfferCountdown({
  storageKey,
  durationMinutes = 15,
  onExpireChange, // 👈 AÑADE ESTO
}: OfferCountdownProps) {
  const [deadline, setDeadline] = useState<number | null>(null);
  const [now, setNow] = useState<number>(Date.now());

  useEffect(() => {
    const saved =
      typeof window !== "undefined" ? localStorage.getItem(storageKey) : null;

    if (saved) {
      setDeadline(Number(saved));
      return;
    }

    const expiresAt = Date.now() + durationMinutes * 60 * 1000;
    localStorage.setItem(storageKey, String(expiresAt));
    setDeadline(expiresAt);
  }, [storageKey, durationMinutes]);

  useEffect(() => {
    if (!deadline) return;

    const interval = window.setInterval(() => {
      setNow(Date.now());
    }, 1000);

    return () => window.clearInterval(interval);
  }, [deadline]);

  const remainingMs = useMemo(() => {
    if (!deadline) return durationMinutes * 60 * 1000;
    return Math.max(deadline - now, 0);
  }, [deadline, now, durationMinutes]);

  const expired = remainingMs <= 0;

  useEffect(() => {
    onExpireChange?.(expired);
  }, [expired, onExpireChange]);

  const mins = String(Math.floor(remainingMs / 1000 / 60)).padStart(2, "0");
  const secs = String(Math.floor((remainingMs / 1000) % 60)).padStart(2, "0");

  if (!deadline) return null;

  if (expired) {
    return (
      <div className="space-y-4">
        <p className="text-base sm:text-xl">
          Esta oferta ya ha caducado.
        </p>
        <p className="text-base sm:text-xl">
          Ya no puedes comprar este producto.
        </p>
      </div>
    );
  }

  return (
    <div className="flex items-end gap-4">
      <div className="flex h-[92px] w-[92px] flex-col rounded-lg items-center justify-center bg-gray-200">
      <span className="text-4xl font-semibold tracking-tight text-red-500">
          {mins}
        </span>
        <span className="text-sm text-red-500">mins</span>
      </div>

      <div className="pb-5 text-4xl font-semibold text-slate-900">:</div>

      <div className="flex h-[92px] w-[92px] flex-col rounded-lg items-center justify-center bg-gray-200">
        <span className="text-4xl font-semibold tracking-tight text-red-500">
          {secs}
        </span>
        <span className="text-sm text-red-500">seg</span>
      </div>
    </div>
  );
}