"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

// Entrada dos blocos ao aparecerem na tela. Anima UMA VEZ por bloco, com
// movimento curto, e nao anima nada para quem pediu menos movimento no
// sistema. Ajuste o site inteiro pelas tres constantes abaixo.

const DESLOCAMENTO = 16;
const DURACAO = 0.5;
const ANTECIPACAO = "-80px";

export default function Revelar({
  children,
  className = "",
  atraso = 0,
}: {
  children: ReactNode;
  className?: string;
  atraso?: number;
}) {
  const semMovimento = useReducedMotion();

  if (semMovimento) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: DESLOCAMENTO }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: ANTECIPACAO }}
      transition={{
        duration: DURACAO,
        delay: atraso,
        ease: [0.2, 0.8, 0.2, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
