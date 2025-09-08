'use client';

import Script from 'next/script';

type Props = {
  formId?: string;          // por defecto el tuyo
  uid?: string;             // por defecto el tuyo
  buttonText?: string;
  placeholder?: string;
  className?: string;       // clases extra (Tailwind, etc.)
};

export default function CkSubscribeButton({
  formId = '8491576',
  uid = '05e8fa3695',
  buttonText = 'Suscribirme',
  placeholder = 'Tu email',
  className = 'max-w-120',
}: Props) {
  const action = `https://app.kit.com/forms/${formId}/subscriptions`;

  // Opciones mínimas para mensaje de éxito (puedes ampliarlas si quieres redirección)
  const dataOptions = JSON.stringify({
    settings: {
      after_subscribe: {
        action: 'message',
        success_message: '¡Hecho! Revisa tu email para confirmar.',
        redirect_url: '',
      },
    },
    version: '5',
  });

  return (
    <div className={className}>
      {/* Carga del script de ConvertKit que gestiona la UX/AJAX */}
      <Script src="https://f.convertkit.com/ckjs/ck.5.js" strategy="afterInteractive" />

      <form
        action={action}
        method="post"
        className="seva-form formkit-form"
        data-sv-form={formId}
        data-uid={uid}
        data-format="inline"
        data-version="5"
        data-options={dataOptions}
      >
        <ul className="formkit-alert formkit-alert-error" data-element="errors" data-group="alert" />

        <div className="formkit-fields flex gap-2" data-element="fields">
          <div className="formkit-field flex-1">
            <input
              className="formkit-input w-full rounded-md border border-neutral-300 px-3 py-2"
              type="email"
              name="email_address"
              required
              aria-label="Email"
              placeholder={placeholder}
            />
          </div>

          <button
            data-element="submit"
            className="formkit-submit inline-flex items-center justify-center rounded-md px-4 py-2 font-medium text-black bg-[#b0e4fc] cursor-pointer"
          >
            <div className="formkit-spinner"><div></div><div></div><div></div></div>
            <span>{buttonText}</span>
          </button>
        </div>

        {/* Quita el “Built with Kit” */}
        <div className="formkit-powered-by-convertkit-container hidden">
          <a data-element="powered-by" className="formkit-powered-by-convertkit" data-variant="dark" />
        </div>
      </form>
    </div>
  );
}
