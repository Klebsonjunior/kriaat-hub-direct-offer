# Direção visual — Kriaat Hub Direct Offer

## Abordagens consideradas

### Abordagem 1 — Editorial de Oficina
Uma evolução da identidade atual: páginas, recortes, marcadores e sinais de processo transformam a sensação de “ideia solta” em uma estrutura concreta. A página alterna roxo profundo, papel quente, amarelo/laranja e verde com ritmo editorial e acabamento tátil.

**Probability:** 0.07

### Abordagem 2 — Catálogo de Possibilidades
Uma direção mais modular, inspirada em catálogos de produtos e fichários: cada pacote aparece como uma combinação objetiva de entregáveis, com navegação mais racional e foco em comparação.

**Probability:** 0.03

### Abordagem 3 — Manifesto de Começo
Uma página mais tipográfica e afirmativa, com blocos de manifesto, frases grandes e contrastes cromáticos fortes para confrontar o custo de continuar parado.

**Probability:** 0.09

## Abordagem escolhida — Editorial de Oficina

### Design Movement
**New editorial craft / design de oficina contemporâneo.** A interface usa a linguagem visual de materiais em construção — papel, etiquetas, sublinhados, recortes e marcas de alinhamento — para comunicar que a Kriaat pega uma intenção abstrata e a organiza em algo pronto para ir ao mercado.

### Core Principles
1. **Da dúvida para a forma:** cada seção deve transformar uma pergunta em uma decisão visualmente simples.
2. **Contraste com função:** roxo cria profundidade e confiança; papel cria pausa e clareza; amarelo/laranja marca reframe; verde sinaliza ação.
3. **Editorial antes de cardificação:** usar headlines, comparações, listas, números e divisores; cards só quando ajudam a escolher ou entender.
4. **Acabamento tátil, não decorativo:** texturas, bordas e pequenos sinais de oficina devem reforçar a narrativa, sem virar ilustração aleatória.

### Color Philosophy
A paleta preserva a combinação proprietária já reconhecível: **roxo profundo** para decisões e autoridade, **off-white** para leitura e respiro, **amarelo/laranja** para a virada mental e **verde** para CTAs que representam avanço concreto. O amarelo não será usado como enfeite recorrente: ele aparece quando a página muda a crença do visitante. O verde fica reservado para ações e confirmação.

### Layout Paradigm
Uma composição editorial assimétrica, com colunas deslocadas, faixas de leitura e elementos que atravessam os limites das seções. A página começa com um palco dividido entre narrativa e artefato visual; depois alterna blocos de largura total, listas em trilho e comparações de duas colunas. No mobile, a assimetria vira uma sequência vertical com margens generosas e hierarquia preservada.

### Signature Elements
1. **Etiquetas de etapa** em monoespaçada, como pequenas marcações de produção.
2. **Linhas de sublinhado e “fitas” amarelas** para destacar uma frase-chave sem usar gradientes.
3. **Marcas de alinhamento e números grandes** que fazem a página parecer uma folha de trabalho bem organizada.

### Interaction Philosophy
Interações devem reduzir a carga de decisão. CTAs levam a âncoras claras; a escolha de pacote abre um formulário curto já contextualizado; a FAQ expande sem deslocamentos bruscos. Hover e focus revelam profundidade e feedback, mas nunca escondem informação essencial.

### Animation
Usar entradas suaves de 180–260ms, com `transform` e `opacity` apenas: etiquetas deslizam poucos pixels, linhas são reveladas por escala horizontal e cards sobem levemente ao receber foco. O modal do briefing entra com escala de 0.96 para 1 e opacidade, sempre com foco inicial no primeiro campo. Respeitar `prefers-reduced-motion` e evitar contadores, parallax e animações contínuas.

### Typography System
Usar **Sora** para headlines e títulos de seção, com peso 600–700 e quebras intencionais. Usar **Manrope** para corpo, botões e textos de apoio, com 400–700. Usar **IBM Plex Mono** para labels de etapa, microcopy técnica e metadados. A hierarquia deve privilegiar headlines grandes, parágrafos curtos e listas escaneáveis; nunca usar texto minúsculo para compensar excesso de conteúdo.

### Brand Essence
**Kriaat Hub transforma vontade de vender online em uma estrutura concreta, produzida no nível de execução que cada pessoa escolhe — sem exigir que ela aprenda tudo antes de começar.**

Personalidade: **direta, cuidadosa, prática**.

### Brand Voice
Headlines são específicas e confrontam o problema sem culpar. CTAs descrevem a próxima ação com verbos simples. Microcopy explica limites, escopo e ausência de promessa financeira com transparência.

> “Você não está sem vontade. Está tentando resolver decisões demais antes da primeira venda.”

> “Escolha quanto da estrutura você quer receber pronto. O resto fica mais simples a partir daí.”

### Wordmark & Logo
Preservar o wordmark existente quando disponível. Para o símbolo da nova página, usar uma marca geométrica sem texto: uma folha dobrada que vira uma seta de avanço, com um pequeno recorte em forma de faísca. O símbolo aparece no header e como favicon, em tamanho visível e sem depender de tipografia gerada.

### Signature Brand Color
**Verde Kriaat — `#2F9B69`.** É a cor própria da ação: não significa promessa de resultado, mas o momento em que a pessoa escolhe e avança para a próxima etapa.

## Regras de implementação

Os preços, prazos, quantidades de criativos, URLs de checkout, endpoint opcional de briefing, contatos e links sociais ficam centralizados em um único arquivo de configuração. A página não inventará depoimentos, números, garantias, urgência ou resultados financeiros. O formulário funcionará no frontend com uma camada preparada para endpoint futuro; enquanto não houver endpoint configurado, o fluxo exibirá uma mensagem transparente e preservará o pacote escolhido.

## Style Decisions

- As áreas de pacotes e FAQ devem ler como folhas editoriais de produção e decisão, usando números, labels monoespaciais, linhas, papel e anotações em vez de parecerem cards genéricos de SaaS.
- Amarelo/laranja fica reservado para viradas de crença, fitas, highlights e ênfases decisivas; Verde Kriaat `#2F9B69` fica reservado para ação, checkmarks e confirmação de avanço.
- O símbolo de folha dobrada com seta e faísca é o dispositivo recorrente da Kriaat: reconhecível no header/footer e como carimbo discreto nos momentos de decisão.
