'use client';
import { useState } from 'react';

export default function EmailCampaign() {
  const [form, setForm] = useState({
    subject: '',
    content: '',
    scheduledAt: '',
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setStatus('sending');

    const res = await fetch('/api/broadcast', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (res.ok) {
      setStatus('sent');
      setMessage('Broadcast programado correctamente');
    } else {
      setStatus('error');
      setMessage(data.error || 'Error desconocido');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="text" placeholder="Asunto" className="border w-full p-2 rounded" required
        value={form.subject}
        onChange={(e) => setForm({ ...form, subject: e.target.value })}
      />
      <textarea placeholder="Contenido HTML" className="border w-full p-2 rounded" rows={5}
        value={form.content}
        onChange={(e) => setForm({ ...form, content: e.target.value })}
      />
      <select
        value={form.scheduledAt}
        onChange={(e) => setForm({ ...form, scheduledAt: e.target.value })}
        className="border w-full p-2 rounded"
      >
        <option value="">Cuándo enviar</option>
        <option value="in 1 hour">En 1 hora</option>
        <option value="tomorrow at 9am">Mañana a las 9</option>
        <option value="Friday at 15:00">Viernes 15:00</option>
      </select>
      <button type="submit" className="bg-black text-white px-4 py-2 rounded">
        {status === 'sending' ? 'Enviando...' : 'Programar envío'}
      </button>
      {message && <p className="text-sm">{message}</p>}
    </form>
  );
}
