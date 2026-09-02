"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/site";

const links = [
  { href: "/#plugins", texto: "Plugins" },
  { href: "/#instalacao", texto: "Instalação" },
  { href: "/#duvidas", texto: "Dúvidas" },
];

export default function Cabecalho() {
  const [rolou, setRolou] = useState(false);
  const [aberto, setAberto] = useState(false);

  useEffect(() => {
    const aoRolar = () => setRolou(window.scrollY > 24);
    aoRolar();
    window.addEventListener("scroll", aoRolar, { passive: true });
    return () => window.removeEventListener("scroll", aoRolar);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        rolou ? "border-b border-tampa bg-breu/94 backdrop-blur" : ""
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="/" className="cartaz text-2xl tracking-tight text-creme">
          {site.marca.split(" ")[0]}
          <span className="text-valvula">
            {site.marca.split(" ").slice(1).join(" ")}
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-poeira transition-colors hover:text-creme"
            >
              {l.texto}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setAberto((v) => !v)}
          aria-expanded={aberto}
          aria-label={aberto ? "Fechar menu" : "Abrir menu"}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`block h-0.5 w-6 bg-creme transition-transform ${aberto ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-creme transition-opacity ${aberto ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-creme transition-transform ${aberto ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {aberto && (
        <nav className="border-t border-tampa bg-breu px-6 py-4 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setAberto(false)}
              className="block border-b border-tampa/70 py-3 text-poeira last:border-0"
            >
              {l.texto}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
