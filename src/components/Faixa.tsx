import Image from "next/image";

// ---------------------------------------------------------------------
// FAIXA ROLANTE de amplificadores e guitarras.
//
// Todos os quadros foram recortados no MESMO enquadramento 4:3 e
// receberam o mesmo tratamento de cor (duotone quente). E isso que faz
// fotos de origens diferentes — catalogo, praia, celular — parecerem um
// conjunto so em vez de uma colagem.
//
// O trilho aparece DUAS vezes no HTML e desliza metade da propria
// largura. Quando a animacao termina, a copia esta exatamente onde a
// primeira comecou, e o ciclo recomeca sem emenda visivel.
// ---------------------------------------------------------------------

const quadros = [
  { src: "/faixa-1.jpg", alt: "Guitarra apoiada em amplificadores" },
  { src: "/faixa-2.jpg", alt: "Detalhe do revestimento de um amplificador" },
  { src: "/faixa-3.jpg", alt: "Amplificador combo visto de frente" },
  { src: "/faixa-4.jpg", alt: "Corpo de uma guitarra em seu estojo" },
  { src: "/faixa-5.jpg", alt: "Captadores e ponte de uma guitarra" },
];

function Quadro({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative aspect-4/3 w-64 shrink-0 overflow-hidden border border-tampa md:w-80">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 16rem, 20rem"
        className="object-cover"
      />
    </div>
  );
}

export default function Faixa() {
  return (
    <section className="faixa relative overflow-hidden border-y border-tampa py-10">
      <div className="trilho flex w-max gap-4">
        {quadros.map((q) => (
          <Quadro key={q.src} {...q} />
        ))}
        {/* Cópia para o laço não ter emenda. aria-hidden porque é a mesma
            informação repetida — leitor de tela não deve ler duas vezes. */}
        <div className="flex gap-4" aria-hidden="true">
          {quadros.map((q) => (
            <Quadro key={`copia-${q.src}`} {...q} alt="" />
          ))}
        </div>
      </div>

      {/* Bordas que se apagam nas pontas, para os quadros não "baterem"
          no fim da tela. */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-linear-to-r from-breu to-transparent md:w-32" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-linear-to-l from-breu to-transparent md:w-32" />
    </section>
  );
}
