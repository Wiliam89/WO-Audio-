"use client";

import { type ReactNode, useEffect, useRef, useState } from "react";

// ---------------------------------------------------------------------
// REVELAR
//
// Mostra o bloco com uma subida curta quando ele entra na tela.
//
// A REGRA MAIS IMPORTANTE AQUI É: O CONTEÚDO NUNCA DEPENDE DO
// JAVASCRIPT PARA APARECER.
//
// A primeira versão escondia o bloco e mandava o JavaScript revelá-lo.
// Se o JavaScript não rodasse — rede corporativa filtrando, extensão de
// segurança, bloqueador, erro de carregamento —, o conteúdo ficava preso
// no estado invisível. Estava no HTML, mas com opacidade zero, e a
// página parecia vazia.
//
// Quem esconde agora é o CSS, dentro de `@media (scripting: enabled)`,
// e lá existe também uma animação de emergência que revela o bloco
// sozinha depois de 3 segundos. Nada disso depende de JavaScript.
//
// O papel deste componente é só DESLIGAR a emergência (marcando que a
// página carregou) e revelar cada bloco na hora certa da rolagem.
//
// O atributo `data-pronto` é escrito DEPOIS que a página monta, de
// propósito: mexer no <html> antes disso cria divergência entre o que o
// servidor mandou e o que o navegador exibe, e o React acusa erro.
// ---------------------------------------------------------------------

export default function Revelar({
  children,
  className = "",
  atraso = 0,
  imediato = false,
}: {
  children: ReactNode;
  className?: string;
  /** Segundos de espera. Use para escalonar itens de uma lista. */
  atraso?: number;
  /** true = aparece assim que a página carrega, sem esperar a rolagem. */
  imediato?: boolean;
}) {
  const alvo = useRef<HTMLDivElement>(null);
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    // Marca que a página carregou de verdade: desliga a animação de
    // emergência do CSS e passa o controle para a rolagem.
    document.documentElement.setAttribute("data-pronto", "1");

    if (imediato) {
      setVisivel(true);
      return;
    }

    const el = alvo.current;
    if (!el) return;

    // Navegador sem IntersectionObserver: mostra tudo de uma vez.
    if (typeof IntersectionObserver === "undefined") {
      setVisivel(true);
      return;
    }

    const observador = new IntersectionObserver(
      (entradas) => {
        for (const e of entradas) {
          if (e.isIntersecting) {
            setVisivel(true);
            observador.disconnect();
          }
        }
      },
      { rootMargin: "-80px" },
    );

    observador.observe(el);
    return () => observador.disconnect();
  }, [imediato]);

  return (
    <div
      ref={alvo}
      className={className}
      data-revelar={visivel ? "visivel" : "pendente"}
      style={atraso ? { transitionDelay: `${atraso}s` } : undefined}
    >
      {children}
    </div>
  );
}
