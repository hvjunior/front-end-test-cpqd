<p align="center">
  <a href="https://www.cpqd.com.br/">
      <img src="https://www.cpqd.com.br/wp-content/themes/cpqd-2017/img/logotipo-cpqd.png" alt="Catho"/>
  </a>
</p>

# Teste para vaga de desenvolvedor Front-end

## Você conhece a dojot?
A dojot nasceu com o objetivo de desenvolver e demonstrar tecnologias para as cidades inteligentes. Inicialmente com foco nos pilares de segurança pública, mobilidade urbana e saúde, pretende construir um ecossistema multidisciplinar nessas áreas.

É uma plataforma brasileira que surgiu com uma proposta open source, para facilitar o desenvolvimento de soluções e o ecossistema IoT com conteúdo local voltado às necessidades brasileiras, assumindo um papel habilitador com:

- APIs abertas tornando o acesso fácil das aplicações aos recursos da plataforma;
- Armazenamento de grandes volumes de dados em diferentes formatos;
- Conexão e coleta de dados de dispositivos;
- Construção de fluxos de dados e regras de forma visual, permitindo a rápida prototipação e validação de cenários de aplicações IoT;
- Processamento de eventos em tempo real aplicando regras definidas pelo desenvolvedor.

## Instruções
O teste consiste na criação de uma página HTML/CSS responsiva utilizando o framework React.js. Esta página tem como requisito funcional a exibição dos dados contidos no arquivo ./json/data.json

Estes dados foram gerados pela plataforma Dojot e são dados que representam os dispositivos na plataforma.

Nós queremos avaliar o seu nível de conhecimento em React.js e UI.

Não tenha pressa! Iremos avaliar a qualidade do seu código, mesmo que incompleto e principalmente a sua semântica.

## Ganhe pontos extras por:
- Desenvolver HTML semântico;
- Utilizar Components Gráficos Material-UI ( https://material-ui.com/ )
- Utilizar animações na página como, por exemplo, o scroll da página.
- Criar alguma função adicional como, por exemplo, a inclusão de um novo device na lista importada do arquivo JSON (sem a necessisade de gravar no arquivo).
- Utilizar o GIT, fazendo um fork deste repositório, criando uma branch com o seu nome e depois enviando um pull request.


## Estrutura do Projeto
O repositório possui a seguinte estrutura:

```md
├── json
│   ├── data.json
├── src/
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
├── node_modules/
│   └── react/
│   └── react-dom/
│   └── react-scripts/
├── public/
│   ├── favicon.ico
│   ├── index.html
├── .gitignore
├── package.json
└── README.md
```

## Executando
Deixamos uma task npm configurada:

- Node.js:
```sh
npm install
npm start
```

Após executar a task acima a interface gráfica estará disponível em: http://localhost:3000

## Teste funcional
Esperamos que ao acessar a URL http://localhost:3000 possamos visualizar os dados contidos no arquivo JSON com um design moderno, agradável e responsivo.

### Avaliação
Avaliaremos o resultado seguindo esses pontos:

- Resultado funcional
- Resultado visual (**o design é muito importante para nós**)
- Clareza e limpeza do código
- Semântica HTML
- Lógica de programação