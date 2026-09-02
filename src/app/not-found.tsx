export default function NaoEncontrado() {
  return (
    <main className="relative z-10 flex min-h-dvh flex-col items-center justify-center gap-6 px-6 text-center">
      <p className="cartaz text-8xl text-valvula">404</p>
      <h1 className="cartaz text-4xl text-creme">Esta página não existe</h1>
      <p className="max-w-md leading-relaxed text-poeira">
        O endereço pode ter mudado ou o link estar incompleto. A página inicial
        tem todos os downloads.
      </p>
      <a
        href="/"
        className="bg-valvula px-7 py-3.5 font-semibold text-breu transition-colors hover:bg-valvula-claro"
      >
        Voltar ao início
      </a>
    </main>
  );
}
