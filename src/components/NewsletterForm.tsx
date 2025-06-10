'use client';

import { useState } from 'react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [accepted, setAccepted] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!accepted) {
      setStatus('error');
      setMessage('Debes aceptar la política de privacidad para suscribirte.');
      return;
    }

    setStatus('loading');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage('¡Te has suscrito exitosamente!');
        setEmail('');
        setAccepted(false);
      } else {
        setStatus('error');
        setMessage(data.error || 'Error al suscribirse');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Error de conexión');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
     <div className="flex gap-2">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        placeholder="Tu email"
        className="border p-2 rounded-full w-100"
      />
      <button
        type="submit"
        className="bg-black text-white px-4 py-2 rounded-full disabled:opacity-50"
        disabled={status === 'loading'}
      >
        {status === 'loading' ? 'Suscribiendo...' : 'Suscribirse'}
      </button>
      </div>

      <label className="flex items-start gap-2 text-sm">
        <input
          type="checkbox"
          checked={accepted}
          onChange={(e) => setAccepted(e.target.checked)}
          className="mt-1 bg-black"
          required
        />
        <span>
          Acepto la{' '}
          <a
            href="/legal"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600 hover:text-blue-800"
          >
            política de privacidad
          </a>
          .
        </span>
      </label>

      

      {message && (
        <p
          className={`text-sm ${
            status === 'success' ? 'text-green-600' : 'text-red-600'
          }`}
        >
          {message}
        </p>
      )}
    </form>
  );
}
