// ---------------------------------------------------------------------
// SILHUETA
//
// A arte vem de um PNG usado como MASCARA de CSS: o navegador recorta um
// retangulo com o degrade do site no formato do desenho. Quem manda na
// cor e o CSS, nao a imagem — se a paleta mudar, a silhueta muda junto.
//
// E uma silhueta generica de guitarrista: nao representa ninguem em
// particular, o que evita qualquer questao de direito de imagem.
//
// O `-webkit-` existe porque o Safari ainda exige o prefixo.
// ---------------------------------------------------------------------

const ARQUIVO = "/silhueta-guitarrista.png";
const PROPORCAO = "258 / 735";

export default function Silhueta({
  className = "",
  opacidade = 1,
  espelhada = false,
}: {
  className?: string;
  opacidade?: number;
  /** Vira a figura ao contrario, para usar do outro lado da tela. */
  espelhada?: boolean;
}) {
  return (
    <div
      aria-hidden="true"
      className={className}
      style={{
        aspectRatio: PROPORCAO,
        opacity: opacidade,
        transform: espelhada ? "scaleX(-1)" : undefined,
        backgroundImage:
          "linear-gradient(160deg, #ff7a1a 0%, #ffa25c 40%, #d9331f 100%)",
        WebkitMaskImage: `url(${ARQUIVO})`,
        maskImage: `url(${ARQUIVO})`,
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskSize: "contain",
        maskSize: "contain",
        WebkitMaskPosition: "bottom center",
        maskPosition: "bottom center",
      }}
    />
  );
}
