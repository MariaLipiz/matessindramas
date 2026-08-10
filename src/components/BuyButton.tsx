"use client";

const CUTOFF = new Date("2026-04-10T21:59:00.000Z").getTime();

export default function BuyButton() {
  const now = Date.now();
  const priceText = now <= CUTOFF ? "260 €" : "650 €";

  async function handleBuy() {
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
      });

      const data = await res.json();

      if (data.url) {
        window.location.href = data.url;
        return;
      }

      alert("Hubo un problema al iniciar el pago.");
    } catch (error) {
      console.error(error);
      alert("Hubo un problema al iniciar el pago.");
    }
  }

  return (
    <button
      onClick={handleBuy}
      className="inline-block rounded-lg bg-[#0B1633] px-8 py-4 text-xl font-semibold text-white transition hover:opacity-95"
    >
      Comprar ahora el curso: EL CÓDIGO FUENTE DE LAS MATEMÁTICAS por {priceText}
    </button>
  );
}