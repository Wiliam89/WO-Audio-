import Image from "next/image";
import { FaDownload, FaGithub } from "react-icons/fa";
import Cabecalho from "@/components/Cabecalho";
import Faixa from "@/components/Faixa";
import Revelar from "@/components/Revelar";
import Silhueta from "@/components/Silhueta";
import { linkDownload, type Plugin, plugins } from "@/data/plugins";
import { linkWhatsapp, site } from "@/data/site";

// =====================================================================
// CAPA
// =====================================================================
function Capa() {
  return (
    <section className="relative flex min-h-dvh items-center overflow-hidden px-6 pt-28 pb-16">
      {/* A silhueta encosta na base da tela, como quem está de pé no
          palco. Fica atrás do texto e com opacidade baixa: acompanha o
          título, não disputa com ele. */}
      <div className="pointer-events-none absolute right-2 bottom-0 hidden h-[78%] md:block lg:right-16">
        <Silhueta className="h-full" opacidade={0.5} />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <p className="mb-6 text-sm tracking-wide text-valvula uppercase">
          Plugins de guitarra · gratuitos · Windows
        </p>

        <h1 className="cartaz text-7xl text-creme sm:text-8xl md:text-9xl">
          Ligue
          <br />
          na tomada
          <br />
          <span className="carimbo">e toque</span>
        </h1>

        <p className="mt-10 max-w-xl text-lg leading-relaxed text-poeira">
          Dois simuladores de amplificador escritos do zero em C++. Sem
          cadastro, sem limite de tempo, sem marca d&apos;água no som. Baixe,
          coloque na sua DAW e use.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#plugins"
            className="flex items-center gap-3 bg-valvula px-8 py-4 font-semibold text-breu transition-colors hover:bg-valvula-claro"
          >
            <FaDownload /> Ver os plugins
          </a>
          <a
            href="#instalacao"
            className="border border-tampa px-8 py-4 font-semibold text-creme transition-colors hover:border-valvula hover:text-valvula"
          >
            Como instalar
          </a>
        </div>
      </div>
    </section>
  );
}

// =====================================================================
// UM PLUGIN
// =====================================================================
function BlocoPlugin({ plugin, indice }: { plugin: Plugin; indice: number }) {
  const acento = plugin.tom === "valvula" ? "text-valvula" : "text-brasa-claro";
  const botao =
    plugin.tom === "valvula"
      ? "bg-valvula hover:bg-valvula-claro"
      : "bg-brasa hover:bg-brasa-claro";
  const imagemNaDireita = indice % 2 === 1;

  return (
    <article className="painel">
      <div className="grid md:grid-cols-2">
        <div
          className={`relative min-h-64 md:min-h-full ${imagemNaDireita ? "md:order-2" : ""}`}
        >
          <Image
            src={plugin.imagem}
            alt={`Imagem ilustrativa do ${plugin.nome}`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col gap-6 p-8 md:p-12">
          <div>
            <h3 className="cartaz text-5xl text-creme md:text-6xl">
              {plugin.nome}
            </h3>
            <p className={`mt-3 text-lg ${acento}`}>{plugin.chamada}</p>
          </div>

          <div className="flex flex-col gap-4 leading-relaxed text-poeira">
            {plugin.descricao.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {plugin.formatos.map((f) => (
              <span
                key={f}
                className="border border-tampa px-3 py-1.5 text-xs text-poeira"
              >
                {f}
              </span>
            ))}
          </div>

          <div className="mt-2 flex flex-wrap items-center gap-x-6 gap-y-3">
            <a
              href={linkDownload(plugin)}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-3 px-7 py-3.5 font-semibold text-breu transition-colors ${botao}`}
            >
              <FaDownload /> Baixar {plugin.nome}
            </a>
            <a
              href={`/plugins/${plugin.slug}`}
              className="border-b border-tampa pb-0.5 text-sm text-creme transition-colors hover:border-valvula hover:text-valvula"
            >
              O que tem dentro
            </a>
            <a
              href={plugin.repositorio}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-poeira transition-colors hover:text-creme"
            >
              <FaGithub /> Código
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

// =====================================================================
// INSTALAÇÃO
// =====================================================================
const passos = [
  {
    titulo: "Baixe o arquivo",
    texto:
      "O botão leva à página de lançamentos no GitHub. Escolha entre a versão VST3, para usar dentro de uma DAW, e a versão independente, que roda sozinha no computador.",
  },
  {
    titulo: "Coloque o VST3 na pasta certa",
    texto:
      "Copie o arquivo terminado em .vst3 para C:\\Program Files\\Common Files\\VST3. É a pasta que toda DAW procura por padrão.",
  },
  {
    titulo: "Mande a DAW procurar de novo",
    texto:
      "Nas preferências de plugins da sua DAW existe um botão de nova varredura. Sem ele, o programa continua exibindo a lista antiga.",
  },
  {
    titulo: "Escolha a entrada certa",
    texto:
      "Antes de tocar, confira qual entrada de áudio está selecionada. Se for o microfone do computador em vez da entrada onde a guitarra está ligada, você vai ter microfonia — o som da caixa voltando pelo microfone.",
  },
  {
    titulo: "Carregue uma resposta de impulso",
    texto:
      "O gabinete não vem embutido. Coloque os arquivos de resposta de impulso que você preferir na pasta indicada pelo plugin. É a escolha que mais muda o timbre final, mais do que qualquer botão.",
  },
];

// =====================================================================
// DÚVIDAS
// =====================================================================
const duvidas = [
  {
    q: "É gratuito mesmo?",
    a: "É. Não há cadastro, versão de avaliação nem limitação no som. O código também é aberto e está no GitHub.",
  },
  {
    q: "Funciona no Mac ou no Linux?",
    a: "Hoje não. Os arquivos publicados são para Windows 64 bits. O código é multiplataforma, então uma versão para Mac é possível no futuro, mas ainda não existe pronta.",
  },
  {
    q: "Preciso de interface de áudio?",
    a: "Funciona sem, mas fica bem melhor com. Entrada de microfone de computador tem ruído alto e atraso grande — e é onde aparecem os problemas de zumbido e microfonia. Uma interface com entrada de instrumento e driver ASIO resolve as três coisas de uma vez.",
  },
  {
    q: "Onde consigo respostas de impulso?",
    a: "Há muitas gratuitas na internet, distribuídas por fabricantes de gabinetes e por estúdios. Procure por arquivos .wav de gabinete de guitarra e experimente vários: a diferença entre uma e outra é enorme.",
  },
  {
    q: "O Windows avisou que o arquivo não é seguro. E agora?",
    a: "Isso acontece porque o programa não tem assinatura digital, que é um certificado pago. O aviso não diz que há algo errado, apenas que o Windows não conhece o autor. Se preferir não arriscar, o código-fonte completo está no GitHub para você mesmo compilar.",
  },
  {
    q: "Como sei se saiu uma versão nova?",
    a: "Os botões desta página levam sempre à versão mais recente publicada. Basta voltar aqui e baixar de novo. No GitHub também dá para clicar em Watch e receber aviso de cada lançamento.",
  },
];

// =====================================================================
// PÁGINA
// =====================================================================
export default function PaginaInicial() {
  return (
    <>
      <Cabecalho />

      <main>
        <Capa />
        <Faixa />

        <section id="plugins" className="relative z-10 px-6 py-24 md:py-32">
          <div className="mx-auto w-full max-w-6xl">
            <Revelar>
              <h2 className="cartaz text-5xl text-creme md:text-7xl">
                Os plugins
              </h2>
              <p className="mt-6 mb-14 max-w-2xl leading-relaxed text-poeira">
                Dois amplificadores com propósitos diferentes. O primeiro para
                rock encorpado de médio presente; o segundo para alto ganho
                moderno, com efeitos embutidos.
              </p>
            </Revelar>

            <div className="flex flex-col gap-10">
              {plugins.map((p, i) => (
                <Revelar key={p.slug} atraso={Math.min(i, 2) * 0.08}>
                  <BlocoPlugin plugin={p} indice={i} />
                </Revelar>
              ))}
            </div>
          </div>
        </section>

        <section
          id="instalacao"
          className="tela relative z-10 px-6 py-24 md:py-32"
        >
          <div className="mx-auto w-full max-w-4xl">
            <Revelar>
              <h2 className="cartaz text-5xl text-creme md:text-7xl">
                Como instalar
              </h2>
              <p className="mt-6 mb-14 max-w-2xl leading-relaxed text-poeira">
                Cinco passos. Do download até o primeiro acorde.
              </p>
            </Revelar>

            <ol className="flex flex-col">
              {passos.map((p, i) => (
                <Revelar key={p.titulo} atraso={Math.min(i, 3) * 0.06}>
                  <li className="grid gap-4 border-t border-tampa py-8 md:grid-cols-[4rem_1fr] md:gap-8">
                    <span className="cartaz text-4xl text-valvula">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="mb-2 text-lg font-semibold text-creme">
                        {p.titulo}
                      </h3>
                      <p className="leading-relaxed text-poeira">{p.texto}</p>
                    </div>
                  </li>
                </Revelar>
              ))}
            </ol>
          </div>
        </section>

        <section id="duvidas" className="relative z-10 px-6 py-24 md:py-32">
          <div className="mx-auto w-full max-w-4xl">
            <Revelar>
              <h2 className="cartaz mb-14 text-5xl text-creme md:text-7xl">
                Dúvidas
              </h2>
            </Revelar>

            <div className="flex flex-col">
              {duvidas.map((d, i) => (
                <Revelar key={d.q} atraso={Math.min(i, 3) * 0.06}>
                  <div className="grid gap-3 border-t border-tampa py-7 md:grid-cols-[16rem_1fr] md:gap-10">
                    <h3 className="font-semibold text-creme">{d.q}</h3>
                    <p className="leading-relaxed text-poeira">{d.a}</p>
                  </div>
                </Revelar>
              ))}
            </div>

            <Revelar>
              <p className="mt-14 leading-relaxed text-poeira">
                Ficou com outra dúvida ou achou um problema?{" "}
                <a
                  href={linkWhatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-valvula underline underline-offset-4 hover:text-valvula-claro"
                >
                  Me chame no WhatsApp
                </a>
                .
              </p>
            </Revelar>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-tampa px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 text-sm text-poeira">
          <span>
            © {new Date().getFullYear()} {site.autor}
          </span>
          <div className="flex gap-6">
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-creme"
            >
              GitHub
            </a>
            <a
              href={site.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-creme"
            >
              Portfólio
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
