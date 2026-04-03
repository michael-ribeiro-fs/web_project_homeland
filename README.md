# De Pátria para Pátria

## Problema 📋

O desafio deste projeto foi construir uma página web responsiva baseada em um layout do Figma, garantindo que o conteúdo se adaptasse corretamente a diferentes tamanhos de tela (desktop, tablet e mobile), mantendo consistência visual e boa experiência do usuário.

Além disso, era necessário aplicar boas práticas de organização de código, como metodologia BEM, estruturação de pastas e versionamento profissional com Git.

---

## Solução 🎯

Foi desenvolvida uma página web que apresenta as cidades de vários colegas da TripleTen dentro do conceito da Galeria de Arte TripleTen, destacando histórias e identidades culturais.

A proposta do projeto é representada pelo seguinte texto:

> A cidade de TripleTen reuniu profissionais de diversos cantos do mundo. Hoje, a Galeria de Arte TripleTen tem o orgulho de apresentar histórias e fotos de algumas das pessoas que dedicam seu tempo e esforço para fazer com que os futuros profissionais de tecnologia desta cidade se sintam em casa. Cada um de nós tem uma história única sobre o lugar de onde viemos. Sinta-se à vontade para adicionar sua própria história e uma obra de arte visual dedicada à sua cidade natal à nossa coleção. Não importa de onde você é, estamos felizes por você ser nosso vizinho.

O layout foi implementado com foco total em responsividade, começando pelo desktop e adaptando progressivamente para telas menores.

🔗 **Acesse o projeto online:**
https://michael-ribeiro-fs.github.io/web_project_homeland/

🔗 **Repositório no GitHub:**
https://github.com/michael-ribeiro-fs/web_project_homeland

---

## Arquitetura 🏗️

A estrutura do projeto foi organizada de forma modular e escalável:

```text
/
├── blocks/
│   ├── footer.css
│   ├── grid.css
│   ├── header.css
│   ├── intro.css
│   ├── page.css
│   └── places.css
│
│
├── fonts/
│   ├── Inter-Black.woff2
│   └── Inter-Regular.woff2
│
├── images/
│   └── (todas as imagens do projeto)
│
├── pages/
│   └── index.css
│
├── vendor/
│   ├── fonts.css
│   └── normalize.css
│
├── index.html
├── favicon.ico
├── README.md
├── .editorconfig
├── .gitignore
└── .prettierignore
```

---

## Decisões Técnicas 🧠

- Desenvolvimento iniciado pelo layout **desktop (1280px)**, garantindo fidelidade ao design base.
- Responsividade aplicada posteriormente com media queries:
  - **320px a 544px (mobile)**
  - **545px a 1024px (tablet)**

- Uso predominante de:
  - `flexbox` para layout
  - `grid layout` para estruturação e responsividade
  - `%` para dimensões fluidas

- Decidi utilizar **CSS Grid Layout** por considerar uma ferramenta mais eficiente e flexível para implementação da responsividade, especialmente na organização de seções com múltiplos elementos e adaptação entre diferentes breakpoints.

- Evitado:
  - larguras fixas em pixels
  - posicionamento rígido

- Metodologia **BEM** aplicada para organização e escalabilidade do CSS.
- Versionamento com **commits semânticos e atômicos**, facilitando leitura do histórico.

### Observação técnica relevante

Durante o desenvolvimento, o favicon não era exibido no Firefox. O problema estava relacionado a cache do navegador, sendo resolvido ao testar em aba anônima.

---

## Tecnologias Utilizadas ⚙️

- HTML5
- CSS3
- Flexbox
- Grid Layout
- Media Queries
- Git e GitHub

---

## Como Executar 🚀

O projeto é estático e não possui dependências externas.

Basta abrir o arquivo:

```text
index.html
```

em qualquer navegador moderno.

Compatível com:

- Google Chrome
- Mozilla Firefox

---

## Próximos Passos 🔮

- Adicionar interatividade com JavaScript
- Refinar ainda mais a responsividade em resoluções intermediárias
- Melhorar compatibilidade entre diferentes navegadores
- Ajustes finos de layout para alcançar maior precisão visual

---

## Considerações Finais

O projeto cumpre o objetivo de consolidar fundamentos essenciais de desenvolvimento front-end, com foco em responsividade, organização de código e boas práticas de versionamento.
