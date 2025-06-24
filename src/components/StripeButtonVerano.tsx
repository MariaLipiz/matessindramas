'use client'

import { useEffect } from 'react'

export default function StripeBuyButton() {
  useEffect(() => {
    const scriptId = 'stripe-buy-button-script'

    // Evita duplicar el script si ya está cargado
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script')
      script.id = scriptId
      script.src = 'https://js.stripe.com/v3/buy-button.js'
      script.async = true
      document.body.appendChild(script)
    }
  }, [])

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
          <stripe-buy-button
      buy-button-id="buy_btn_1RdWktGWnNvqP6QR3bV3TIyG"
      publishable-key="pk_live_51RYRZJGWnNvqP6QR5Hg01Pvul9IGuNgY5YZ31VxX6Nxl96oTGU9wEcUKnffjklkUCAmTIrCtFLlK6hifWFhZLzul00Tp43wcJz"
    ></stripe-buy-button>
        `,
      }}
    />
  );
}

