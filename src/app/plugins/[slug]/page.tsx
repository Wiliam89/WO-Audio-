import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { FaDownload, FaGithub } from "react-icons/fa";
import Cabecalho from "@/components/Cabecalho";
import Revelar from "@/components/Revelar";
import { acharPlugin, linkDownload, plugins } from "@/data/plugins";
import { site } from "@/data/site";

type Props = { params: Promise<{ slug: string }> };

// Plugin novo no arquivo de dados = página nova, sem escrever código.
export function generateStaticParams() {
  return plugins.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const plugin = acharPlugin(slug);
  if (!plugin) return { title: "Plugin não encontrado" };
  return {
    title: plugin.nome,
    description: plugin.chamada,
    openGraph: { title: plugin.nome, description: plugin.chamada },
  };
}

export default async function PaginaPlugin({ params }: Props) {
  const { slug } = await params;
  const plugin = acharPlugin(slug);
  if (!plugin) notFound();

  const botao =
    plugin.tom === "valvula"
      ? "bg-valvula hover:bg-valvula-claro"
      : "bg-brasa hover:bg-brasa-claro";

  return (
    <>
      <Cabecalho />

      <main className="relative z-10 px-6 pt-32 pb-24">
        <div className="mx-auto w-full max-w-4xl">
          <a
            href="/#plugins"
            className="text-sm text-poeira transition-colors hover:text-creme"
          >
            Voltar aos plugins
          </a>

          <h1 className="cartaz mt-8 text-6xl text-creme md:text-8xl">
            {plugin.nome}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-valvula">
            {plugin.chamada}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <a
              href={linkDownload(plugin)}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-3 px-7 py-3.5 font-semibold text-breu transition-colors ${botao}`}
            >
              <FaDownload /> Baixar a versão mais recente
            </a>
            <a
              href={plugin.repositorio}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-poeira transition-colors hover:text-creme"
            >
              <FaGithub /> Ver o código
            </a>
          </div>

          <Revelar className="relative mt-14 aspect-video border border-tampa">
            <Image
              src={plugin.imagem}
              alt={`Imagem ilustrativa do ${plugin.nome}`}
              fill
              sizes="(max-width: 896px) 100vw, 896px"
              className="object-cover"
              priority
            />
          </Revelar>

          <Revelar className="mt-14 flex max-w-2xl flex-col gap-5 leading-relaxed text-poeira">
            {plugin.descricao.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </Revelar>

          <Revelar>
            <h2 className="cartaz mt-16 text-4xl text-creme">
              O que tem dentro
            </h2>
            <div className="mt-8 flex flex-col">
              {plugin.recursos.map((r) => (
                <div
                  key={r.titulo}
                  className="grid gap-2 border-t border-tampa py-6 md:grid-cols-[16rem_1fr] md:gap-10"
                >
                  <h3 className="font-semibold text-creme">{r.titulo}</h3>
                  <p className="leading-relaxed text-poeira">{r.texto}</p>
                </div>
              ))}
            </div>
          </Revelar>

          <Revelar>
            <h2 className="cartaz mt-16 text-4xl text-creme">
              O que você precisa
            </h2>
            <ul className="mt-6 flex flex-col">
              {plugin.requisitos.map((r) => (
                <li key={r} className="border-t border-tampa py-4 text-poeira">
                  {r}
                </li>
              ))}
            </ul>
          </Revelar>

          <Revelar>
            <p className="mt-14 text-sm leading-relaxed text-poeira">
              O botão de download leva sempre à última versão publicada. Se você
              já usa o {plugin.nome}, basta voltar aqui para atualizar. Dúvidas
              sobre instalação estão na{" "}
              <a
                href="/#instalacao"
                className="text-valvula underline underline-offset-4"
              >
                página inicial
              </a>
              .
            </p>
          </Revelar>
        </div>
      </main>

      <footer className="relative z-10 border-t border-tampa px-6 py-10">
        <div className="mx-auto max-w-4xl text-sm text-poeira">
          © {new Date().getFullYear()} {site.autor}
        </div>
      </footer>
    </>
  );
}
