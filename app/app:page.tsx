"use client";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res = await fetch("/api/reminder", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, phone, date, message }),
    });
    const data = await res.json();
    alert(data.success ? "✅ Recordatorio creado" : "❌ Error al crear recordatorio");
  };

  return (
    <main className="min-h-screen bg-white text-gray-900 p-10">
      <h1 className="text-4xl font-bold mb-6 text-center">🚀 FlujoPro.es</h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-gray-100 p-6 rounded-xl shadow grid gap-4"
      >
        <label>
          Nombre del cliente:
          <input
            type="text"
            className="w-full p-2 rounded-lg border"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ej: Laura Fernández"
          />
        </label>
        <label>
          Número de WhatsApp:
          <input
            type="text"
            className="w-full p-2 rounded-lg border"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+34..."
          />
        </label>
        <label>
          Fecha y hora del recordatorio:
          <input
            type="datetime-local"
            className="w-full p-2 rounded-lg border"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>
        <label>
          Mensaje:
          <textarea
            className="w-full p-2 rounded-lg border"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Hola, le recordamos su cita mañana a las 10:00"
          />
        </label>
        <button
          type="submit"
          className="bg-[#4FB7F5] text-white px-6 py-3 rounded-xl hover:scale-105 transition"
        >
          Activar recordatorio
        </button>
      </form>
    </main>
  );
}
