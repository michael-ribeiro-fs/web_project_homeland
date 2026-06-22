# De Pátria para Pátria

## Problema📋

O desafio deste projeto foi construir uma página web responsiva a partir de um layout do Figma, garantindo boa experiência em diferentes tamanhos de tela (desktop, tablet e mobile), além de implementar interações básicas de UI como abertura de imagens em destaque (lightbox/popup) sem recorrer a frameworks.

Também era necessário aplicar boas práticas de organização de código: metodologia BEM no CSS, separação de responsabilidades no JavaScript e estruturação de pastas escalável, mesmo em um projeto de pequeno porte.

## Solução🎯

Foi desenvolvida uma página que apresenta as cidades natais de colegas do curso de desenvolvimento web da TripleTen, dentro do conceito da "Galeria de Arte TripleTen", um espaço para compartilhar histórias e identidades culturais de diferentes lugares do mundo.

A página é composta por:

- **Header** com logo, título e imagem de destaque;
- **Intro** com texto de apresentação do projeto;
- **Grid de fotos** interativo, renderizado dinamicamente via JavaScript, onde cada imagem abre em um popup ao ser clicada;
- **Places**, seção com cards de cidades (texto, imagem e link), cujas imagens também abrem no mesmo popup reutilizado do grid;
- **Footer** com informações de copyright.

🔗 **Acesse o projeto online:**
https://michael-ribeiro-fs.github.io/web_project_homeland/

🔗 **Repositório no GitHub:**
https://github.com/michael-ribeiro-fs/web_project_homeland

## Arquitetura🏗️

A estrutura do projeto separa estilos, scripts e recursos por responsabilidade:

```text
/
├── blocks/                 # CSS por bloco (metodologia BEM)
│   ├── footer.css
│   ├── header.css
│   ├── intro.css
│   ├── page.css
│   ├── photogrid.css
│   ├── places.css
│   └── popup.css
│
├── images/                 # Imagens do projeto (incluindo versões "-large")
│
├── vendor/                 # Recursos de terceiros
│   ├── fonts/
│   ├── fonts.css
│   └── normalize.css
│
├── src/
│   ├── components/         # Classes JavaScript reutilizáveis
│   │   ├── Card.js         # Cria um card de imagem a partir de um template
│   │   ├── Popup.js        # Controla abertura/fechamento do popup (lightbox)
│   │   └── Section.js      # Renderiza uma coleção de itens em um container
│   │
│   └── pages/
│       ├── index.css       # Ponto de entrada do CSS (importa vendor + blocks)
│       └── index.js        # Ponto de entrada do JS (orquestra os componentes)
│
├── index.html
├── favicon.ico
├── README.md
├── .editorconfig
├── .gitignore
└── .prettierignore
```

A separação segue o princípio de responsabilidade única: `Card` sabe criar um card e disparar um callback ao ser clicado; `Popup` sabe controlar seu próprio estado de exibição; `Section` sabe apenas renderizar uma coleção de itens em um container, recebendo via parâmetro a função responsável por criar cada item. Isso permite que `index.js` apenas orquestre essas peças, sem conter lógica de DOM espalhada.

## Decisões Técnicas🧠

- **Desenvolvimento mobile-first invertido**: implementação iniciada pelo layout desktop (1280px), com adaptação posterior via media queries para tablet (545px–1024px) e mobile (320px–544px), priorizando fidelidade ao design original do Figma.
- **CSS Grid e Flexbox** como base de layout, por oferecerem mais controle na adaptação entre breakpoints do que abordagens baseadas apenas em float/posicionamento manual.
- **Metodologia BEM** aplicada de forma consistente em todo o CSS, facilitando leitura e evitando conflitos de especificidade.
- **JavaScript orientado a objetos (ES Modules)**: em vez de manipular o DOM diretamente em um único arquivo, a lógica foi dividida em classes (`Card`, `Popup`, `Section`), cada uma com uma responsabilidade clara. Isso facilita reuso, o mesmo `Popup` é usado tanto pelo grid de fotos quanto pelos cards de "places".
- **Uso de `<template>` HTML** para gerar os cards do grid dinamicamente, evitando concatenação manual de strings HTML.
- **Renderização data-driven no grid de fotos**: as imagens do grid vêm de um array de objetos (`name`, `link`, `large`), enquanto os cards de "places" permanecem fixos no HTML — uma decisão consciente, já que esse conteúdo é editorial e não muda dinamicamente, não havendo benefício real em abstraí-lo.
- **Acessibilidade básica**: atributos `alt` descritivos em todas as imagens, fechamento do popup via tecla `Escape` ou clique fora da imagem.
- Evitado: larguras fixas em pixels sempre que possível; posicionamento rígido sem fallback responsivo.

### Observação técnica relevante

Durante o desenvolvimento, o favicon não era exibido no Firefox. O problema estava relacionado a cache do navegador, sendo resolvido ao testar em aba anônima.

## Tecnologias Utilizadas⚙️

- HTML5 (elemento `<template>`)
- CSS3 (Flexbox, Grid Layout, Media Queries, metodologia BEM)
- JavaScript (ES Modules, Classes/POO)
- Git e GitHub

## Como Executar🚀

O projeto é estático e não possui dependências externas nem etapa de build.

Basta abrir o arquivo `index.html` em qualquer navegador moderno, ou servir a pasta com um servidor estático simples, por exemplo:

```bash
npx serve .
```

Compatível com:

- Google Chrome
- Mozilla Firefox

## Próximos Passos🔮

- Substituir a lógica de `src.replace(".png", "-large.png")` por um atributo `data-large` explícito no HTML, tornando a relação entre imagem normal e ampliada menos dependente de convenção de nomenclatura.
- Tornar a seção "places" data-driven, caso o conteúdo passe a ser dinâmico ou alimentado por uma fonte externa no futuro.
- Extrair valores fixos do CSS (como larguras em pixels) para variáveis (`custom properties`), facilitando manutenção e possíveis temas.
- Adicionar testes unitários simples para as classes `Card`, `Popup` e `Section`.
- Configurar lint (ESLint/Prettier) e um script de build mínimo para padronizar o fluxo de desenvolvimento.

## Licença📝

Projeto desenvolvido no âmbito do curso Desenvolvimento Web da TripleTen.
