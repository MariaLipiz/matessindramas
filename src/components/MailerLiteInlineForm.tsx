"use client";

import { useEffect } from "react";

const FORM_NUM = "34766427";
const ACCOUNT_ID = "1988299";
const FORM_ENDPOINT_ID = "174062101722039772";

export default function MailerLiteInlineForm() {
  useEffect(() => {
    // Carga fonts.css UNA vez
    const fontHref = "https://assets.mlcdn.com/fonts.css?version=1765458";
    if (!document.querySelector(`link[href="${fontHref}"]`)) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = fontHref;
      document.head.appendChild(link);
    }

    // Carga webforms.min.js UNA vez
    const scriptSrc =
      "https://groot.mailerlite.com/js/w/webforms.min.js?v176e10baa5e7ed80d35ae235be3d5024";

    if (!document.querySelector(`script[src="${scriptSrc}"]`)) {
      const s = document.createElement("script");
      s.src = scriptSrc;
      s.async = true;
      document.body.appendChild(s);
    }

    // Función success requerida por MailerLite
    (window as any)[`ml_webform_success_${FORM_NUM}`] = function () {
      const form = document.querySelector(
        `.ml-subscribe-form-${FORM_NUM} .row-form`
      ) as HTMLElement | null;
      const success = document.querySelector(
        `.ml-subscribe-form-${FORM_NUM} .row-success`
      ) as HTMLElement | null;

      if (form) form.style.display = "none";
      if (success) success.style.display = "block";
    };

    // Ping takel (lo exige ML)
    fetch(
      `https://assets.mailerlite.com/jsonp/${ACCOUNT_ID}/forms/${FORM_ENDPOINT_ID}/takel`
    ).catch(() => {});
  }, []);

  return (
    <>
      {/* CSS mínimo y elegante */}
      <style jsx global>{`
  #mlb2-${FORM_NUM} form.ml-block-form {
  display: flex;
  flex-direction: column; /* columna por defecto para móviles */
  gap: 0.5rem;
  width: 100%;
}

#mlb2-${FORM_NUM} .input-container {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
}

/* Input */
#mlb2-${FORM_NUM} input[type="email"] {
  flex: 1;
  padding: 1rem;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 1.2rem;
  outline: none;
}

#mlb2-${FORM_NUM} input[type="email"]:focus {
  border-color: #111827;
}

/* Checkbox */
#mlb2-${FORM_NUM} .checkbox-label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
}

#mlb2-${FORM_NUM} .privacy-link {
  color: #0ea5e9;
  text-decoration: underline;
}

/* Botón */
#mlb2-${FORM_NUM} button.primary {
  padding: 1rem;
  border-radius: 8px;
  background: #111827;
  color: white;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  border: none;
  transition: all 0.2s;
}

#mlb2-${FORM_NUM} button.primary:hover {
  background: #000;
}

/* Media query escritorio */
@media (min-width: 768px) {
  #mlb2-${FORM_NUM} form.ml-block-form {
    flex-direction: row; /* input y botón en línea */
    gap: 1rem;
    align-items: flex-start; /* todo alineado arriba */
    justify-content: flex-start; /* mantiene todo a la izquierda */
  }

  #mlb2-${FORM_NUM} .input-container {
    flex: 1;
    max-width: 350px; /* limita ancho del input + checkbox */
  }

  #mlb2-${FORM_NUM} button.primary {
    background: #111827;
    color: white;
  }

  #mlb2-${FORM_NUM} button.primary:hover {
    background: #a9e2ff;
    color: #111827;
  }
}



`}</style>

      {/* FORMULARIO */}
      <div
        id={`mlb2-${FORM_NUM}`}
        className={`ml-form-embedContainer ml-subscribe-form ml-subscribe-form-${FORM_NUM}`}
      >
        <div className="ml-form-align-center">
          <div className="ml-form-embedWrapper embedForm">
            <div className="ml-form-embedBody row-form">
            <form
  className="ml-block-form"
  action={`https://assets.mailerlite.com/jsonp/${ACCOUNT_ID}/forms/${FORM_ENDPOINT_ID}/subscribe`}
  method="post"
  target="_blank"
  onSubmit={(e) => {
    const checkbox = (e.currentTarget.querySelector(
      'input[name="privacy"]'
    ) as HTMLInputElement | null);
    if (!checkbox?.checked) {
      e.preventDefault();
      alert("Debes aceptar la política de privacidad.");
    }
  }}
>
  {/* Contenedor de input + checkbox */}
  <div className="input-container">
    <input
      type="email"
      name="fields[email]"
      placeholder="Tu email"
      required
    />

    <label className="checkbox-label">
      <input type="checkbox" name="privacy" />
      Acepto la <a href="/legal" target="_blank" className="privacy-link">política de privacidad</a>
    </label>
  </div>

  <button type="submit" className="primary">
    Vale
  </button>
</form>


            </div>

            <div className="row-success" style={{ display: "none" }}>
              <p>Estás dentro.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
