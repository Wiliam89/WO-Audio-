# Plugins de guitarra — site de downloads

Site onde os plugins **plugin-Blues** e **Arauto** são apresentados e baixados.

**No ar em:** _(coloque aqui a URL depois de publicar)_

## Como os downloads funcionam

Todos os botões apontam para `.../releases/latest` no GitHub. Esse endereço é
redirecionado pelo próprio GitHub para o lançamento mais recente do repositório.

Na prática: quando você publica uma versão nova no repositório do plugin, quem
clicar aqui já baixa a versão nova. **Você não precisa mexer neste site.**

Por isso, nunca troque `/releases/latest` por um link com número de versão — se
fizer isso, o site congela naquela versão.

## Rodando na sua máquina

```bash
pnpm install
pnpm dev
```

Abra http://localhost:3000.

## Comandos

| Comando | O que faz |
| --- | --- |
| `pnpm dev` | Modo de desenvolvimento |
| `pnpm build` | Gera a versão de produção |
| `pnpm typecheck` | Confere os tipos |
| `pnpm lint` | Aponta problemas de código |
| `pnpm format` | Corrige o que dá para corrigir |

## Mudando o conteúdo

| O que você quer mudar | Arquivo |
| --- | --- |
| Nome da marca, endereços, contato | `src/data/site.ts` |
| Descrições dos plugins, recursos, requisitos | `src/data/plugins.ts` |
| Passos de instalação e dúvidas frequentes | `src/app/page.tsx` |
| Cores e tipografia | `src/app/globals.css` |
| Imagens da faixa rolante | `src/components/Faixa.tsx` e `public/` |

Para publicar um plugin novo, copie um bloco em `src/data/plugins.ts`, cole no
fim da lista e troque os valores. A seção na página inicial, a página própria em
`/plugins/<slug>` e o mapa do site aparecem sozinhos.

## Identidade visual

Preto quente, laranja de válvula acesa e vermelho de cartaz de show. Tipografia
de cartaz (Anton) sobre uma grotesca de leitura (Archivo). Os blocos usam trama
de tela de alto-falante e filete de luz no topo, como o painel de um
amplificador.

É deliberadamente diferente do portfólio, que usa preto frio com violeta e ouro.

## Sobre as imagens

As silhuetas e as fotos são genéricas, sem pessoas identificáveis, sem
logotipos de fabricantes e sem marca d'água. Isso é intencional: o site divulga
produtos de simulação de áudio, e exibir marcas de terceiros ao lado deles
sugeriria uma relação que não existe.

## Licença

Código sob licença MIT.
