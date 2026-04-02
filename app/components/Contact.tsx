"use client";

import { useState } from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Contact = () => {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setErrorMsg(json.error || "Erreur lors de l'envoi.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Impossible de contacter le serveur.");
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center bg-linear-to-b from-purple-50 to-purple-100 px-6 text-center py-24"
    >
      <h2 className="text-4xl font-bold mb-4 font-serif">Contactez-nous</h2>
      <p className="max-w-xl mb-8 text-gray-600">
        Remplissez le formulaire ci-dessous et nous vous répondrons rapidement.
      </p>

      <form
        className="w-full max-w-md bg-white p-6 rounded-xl shadow-md flex flex-col gap-4 mb-8"
        onSubmit={handleSubmit}
      >
        <input
          name="name"
          type="text"
          placeholder="Votre nom"
          required
          maxLength={50}
          className="border border-gray-200 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm"
        />
        <input
          name="email"
          type="email"
          placeholder="Votre email"
          required
          className="border border-gray-200 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm"
        />
        <textarea
          name="message"
          placeholder="Votre message (10 caractères minimum)"
          rows={4}
          required
          minLength={10}
          maxLength={5000}
          className="border border-gray-200 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm resize-none"
        />

        {status === "error" && (
          <p className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg px-4 py-2">
            {errorMsg}
          </p>
        )}

        {status === "success" && (
          <p className="text-green-600 text-sm bg-green-50 border border-green-200 rounded-lg px-4 py-2">
            Message envoyé avec succès ! Nous vous répondrons sous 24h.
          </p>
        )}

        <button
          type="submit"
          disabled={status === "sending"}
          className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition font-semibold disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "sending" ? "Envoi en cours..." : "Envoyer le message"}
        </button>
      </form>

      <div className="flex gap-6 text-purple-600 text-2xl">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-800 transition">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-800 transition">
          <FaInstagram />
        </a>
      </div>
    </section>
  );
};

export default Contact;