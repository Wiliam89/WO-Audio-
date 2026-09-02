// ---------------------------------------------------------------------
// PLUGINS
//
// ESTE É O ÚNICO ARQUIVO QUE VOCÊ EDITA PARA MEXER NO CONTEÚDO.
// Para publicar um plugin novo, copie um bloco inteiro, cole no fim da
// lista e troque os valores. A seção, a página própria e o mapa do site
// aparecem sozinhos.
//
// SOBRE OS LINKS DE DOWNLOAD — leia, é importante:
//
// Todos apontam para /releases/latest, e NÃO para uma versão fixa.
// O GitHub redireciona esse endereço para a última publicação que você
// fizer. Ou seja: publicou a v1.1.0 lá, quem clicar aqui já baixa a
// v1.1.0, sem você tocar neste site.
//
// Por isso NUNCA troque /releases/latest por um link com número de
// versão dentro — se fizer isso, o site congela naquela versão e você
// vai ter que vir aqui a cada lançamento.
// ---------------------------------------------------------------------

export type Plugin = {
  /** Vira o endereço da página: /plugins/<slug>. Só minúsculas e hífen. */
  slug: string;
  nome: string;
  /** Uma linha, aparece logo abaixo do nome. */
  chamada: string;
  /** Parágrafos da descrição. */
  descricao: string[];
  /** O que o plugin faz, em itens curtos. */
  recursos: { titulo: string; texto: string }[];
  /** Formatos disponíveis para baixar. */
  formatos: string[];
  requisitos: string[];
  /** Endereço da página de releases do repositório. */
  repositorio: string;
  /** Cor de destaque do bloco: muda o realce, não o site inteiro. */
  tom: "valvula" | "brasa";
  imagem: string;
};

export const plugins: Plugin[] = [
  {
    slug: "plugin-blues",
    nome: "plugin-Blues",
    chamada:
      "Três canais, gabinete por resposta de impulso e tone stack de circuito",
    descricao: [
      "Simulador de amplificador de guitarra escrito em C++, feito para quem quer o timbre encorpado e de médio presente dos amplificadores valvulados britânicos dos anos 80 — aquele som de rock que não é limpo nem moderno de alto ganho, e sim algo no meio.",
      "A cadeia reproduz a ordem do circuito real: entrada, noise gate, overdrive, pré-amplificador em cascata, gabinete, delay, reverb e estágio de potência com limitador.",
      "O que separa este plugin da maioria é o tone stack. Em vez de três filtros independentes, ele resolve o circuito passivo de verdade — grave, médio e agudo formam um só divisor de tensão e um mexe no outro. É por isso que zerar o médio produz sozinho aquele timbre escavado, sem nenhum filtro dedicado a isso.",
    ],
    recursos: [
      {
        titulo: "Três canais de verdade",
        texto:
          "Não é o mesmo circuito com mais ganho. Muda o número de estágios de saturação, o corte de grave entre eles e o próprio tone stack.",
      },
      {
        titulo: "Recorte por diodo no canal de ritmo",
        texto:
          "Joelho curto e compressão rápida, que é o que dá o ataque marcado característico desse tipo de amplificador.",
      },
      {
        titulo: "Gabinete por resposta de impulso",
        texto:
          "Carregue os arquivos que você quiser, com duas vozes e mistura entre elas. O gabinete é o que mais muda o timbre — aqui a escolha é sua.",
      },
      {
        titulo: "Depth e Tight",
        texto:
          "Depth devolve o peso do grave depois da distorção; Tight decide quanto grave entra nela. Juntos resolvem o eterno problema da corda grave embolada.",
      },
      {
        titulo: "Noise gate ligado por padrão",
        texto:
          "Porque com ganho alto e uma entrada doméstica, o chiado aparece antes da guitarra.",
      },
      {
        titulo: "Corte de grave na entrada",
        texto:
          "Três posições, incluindo uma para matar zumbido de rede em cabo desbalanceado e entrada de computador.",
      },
    ],
    formatos: ["VST3 para DAW", "Aplicativo independente"],
    requisitos: [
      "Windows 10 ou 11, 64 bits",
      "Qualquer DAW que aceite VST3 (Reaper, Ableton, FL Studio, Cubase, Studio One)",
      "Interface de áudio recomendada, com driver ASIO",
    ],
    repositorio: "https://github.com/Wiliam89/plugin-Blues",
    tom: "valvula",
    imagem: "/faixa-4.jpg",
  },
  {
    slug: "arauto",
    nome: "Arauto",
    chamada: "Alto ganho, wah, harmonizador e efeitos numa cadeia só",
    descricao: [
      "Voltado a timbres modernos de alto ganho, com a definição e o peso que esse estilo exige. A cadeia é maior que a do plugin-Blues e traz efeitos que normalmente exigiriam três ou quatro plugins separados.",
      "Wah, dois estágios de drive independentes, amplificador de quatro estágios, gabinete, harmonizador, phaser, delay e reverb. Tudo numa cadeia só, com bypass real por módulo — o que está desligado é pulado, não apenas silenciado.",
      "O harmonizador usa um motor próprio de detecção de altura, e o tone stack compartilha o mesmo núcleo derivado do circuito passivo usado no plugin-Blues.",
    ],
    recursos: [
      {
        titulo: "Cadeia completa",
        texto:
          "Wah, dois drives, amplificador, gabinete, harmonizador, phaser, delay e reverb, na ordem em que fariam sentido numa pedaleira real.",
      },
      {
        titulo: "Quatro estágios de saturação no canal de solo",
        texto:
          "Com cortes de grave progressivamente mais altos entre eles — é o que impede o alto ganho de virar lama.",
      },
      {
        titulo: "Harmonizador com detecção de altura",
        texto:
          "Segunda voz acompanhando o que você toca, dentro do próprio plugin.",
      },
      {
        titulo: "Depth e Tight",
        texto:
          "Tight alto deixa o palm mute seco e articulado; Depth devolve o peso sem embolar a distorção.",
      },
      {
        titulo: "Gerenciador de presets",
        texto:
          "Salve e organize seus ajustes em arquivos, fora da sessão da DAW.",
      },
    ],
    formatos: ["VST3 para DAW", "Aplicativo independente"],
    requisitos: [
      "Windows 10 ou 11, 64 bits",
      "Qualquer DAW que aceite VST3",
      "Interface de áudio recomendada, com driver ASIO",
    ],
    repositorio: "https://github.com/Wiliam89/Plugin-Arauto",
    tom: "brasa",
    imagem: "/faixa-5.jpg",
  },
];

/** Sempre a versão mais recente publicada no GitHub. */
export function linkDownload(plugin: Plugin): string {
  return `${plugin.repositorio}/releases/latest`;
}

export function acharPlugin(slug: string): Plugin | undefined {
  return plugins.find((p) => p.slug === slug);
}
