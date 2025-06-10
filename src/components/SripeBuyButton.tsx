'use client';

import { useEffect } from 'react';

export default function StripeBuyButton() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://js.stripe.com/v3/buy-button.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
          <stripe-buy-button
            buy-button-id="buy_btn_1RYSCjGWnNvqP6QRJiIheoWd"
            publishable-key="pk_live_51RYRZJGWnNvqP6QR5Hg01Pvul9IGuNgY5YZ31VxX6Nxl96oTGU9wEcUKnffjklkUCAmTIrCtFLlK6hifWFhZLzul00Tp43wcJz">
          </stripe-buy-button>
        `,
      }}
    />
  );
}
