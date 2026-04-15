# Bem-vindo(a) ao meu Repositório Full Stack! 👋

Este repositório é o seu guia completo e prático para dominar a construção de aplicações web de ponta a ponta. Cobrimos desde a construção de APIs robustas, seguras e conteinerizadas no **Back-end (Node.js)** até o desenvolvimento de interfaces interativas, modernas e responsivas no **Front-end (React)**.

Aqui você encontrará todo o código-fonte, projetos e desafios práticos desenvolvidos ao longo da jornada.

---

## ⚠️ Pré-requisitos

Para acompanhar e executar os projetos deste repositório, é recomendado que você tenha:
* Conhecimento prévio em Lógica de Programação e JavaScript.
* **Node.js** instalado na sua máquina.
* **Docker** e **Docker Compose** instalados (para os módulos avançados de banco de dados).
* Um gerenciador de pacotes (como `npm`, `yarn` ou `pnpm`).

---

## 📚 Estrutura da Trilha de Aprendizado

O conteúdo é estruturado em níveis de complexidade, divididos entre Back-end e Front-end, garantindo uma progressão de aprendizado lógica e eficaz.

### 🟢 BACK-END: Node.js e APIs

#### Nível 8: Iniciando no Node.js (Fundamentos)
Foco na base do desenvolvimento backend e na compreensão dos conceitos por trás dos bastidores.

| Módulo | Foco Principal | Duração Aprox. |
| :--- | :--- | :--- |
| **Fundamentos do Node.js** | Criação e configuração de servidores básicos com o módulo nativo **HTTP**, `middlewares`, e conceitos essenciais de **API**. | 5h 25min |

#### Nível 9: API REST com Node.js
Construção de APIs de forma profissional, introduzindo frameworks e acesso a bancos de dados relacionais.

| Módulo | Foco Principal | Tecnologias | Duração Aprox. |
| :--- | :--- | :--- | :--- |
| **Criando API REST** | Desenvolvimento de APIs RESTful, definição de rotas e validação de dados. | Express, Zod | 2h 54min |
| **Banco de dados** | Fundamentos de Bancos de Dados Relacionais (chaves, relacionamentos, estruturação e consultas). | SQL | 3h 19min |
| **Query Builder** | Configuração para construir consultas dinâmicas, migrações e transações. | Knex.js | 1h 35min |
| **Criando uma API de Restaurante** | Prática consolidada de API REST, SQL e Query Builders em um projeto completo. | Express, Knex, SQL | 3h 03min |

#### Nível 10: Node.js com Containers (Produção e Escala)
Elevando a aplicação para um ambiente pronto para produção, com conteinerização, ORMs e testes.

| Módulo | Foco Principal | Tecnologias | Duração Aprox. |
| :--- | :--- | :--- | :--- |
| **Containers** | Criação e gerenciamento de containers e persistência de dados (Volumes). | Docker, Postgres, SQLite | 1h 59min |
| **ORM** | Uso de ORMs para facilitar a manipulação e relacionamento de bancos de dados. | Prisma ORM | 1h 18min |
| **Autenticação e Autorização** | Segurança utilizando tokens, diferenciando autenticação e autorização na prática. | JWT | 1h 07min |
| **Testes Automatizados** | Testes unitários, critérios de teste, expectativas e testes *end-to-end* (E2E). | Jest | 59min |
| **API de Entregas de Encomendas** | Criação de uma API do zero para um app de delivery integrando tudo o que foi aprendido. | Prisma, Docker, Zod | 3h 21min |
| **Deploy** | Publicação da aplicação e do banco de dados em um servidor web real. | - | 1h 09min |
| **Gerenciando Dependências** | Atualização de pacotes, controle de versões e solução de quebras no código. | - | 1h 44min |

#### Nível 11: Bônus
| Módulo | Foco Principal | Duração Aprox. |
| :--- | :--- | :--- |
| **API do APP Refund 2.0** | Sistema de reembolso fornecendo dados para o front-end, incluindo upload e validação de arquivos. | 3h 18min |

---

### ⚛️ FRONT-END: React e Interfaces Modernas

#### Nível 12: Iniciando no React
Introdução ao ecossistema front-end moderno.

| Módulo | Foco Principal | Tecnologias | Duração Aprox. |
| :--- | :--- | :--- | :--- |
| **Fundamentos do React** | Criação de componentes reutilizáveis, gerenciamento de estados e propriedades (props). | React | 1h 57min |
| **Primeiro Projeto React** | Jogo interativo de adivinhar palavras para consolidar eventos, estados e manipulação do DOM. | React | 1h 59min |

#### Nível 13: Avançando no React
Aprofundamento na construção de SPAs (Single Page Applications) complexas e conectadas a APIs.

| Módulo | Foco Principal | Tecnologias | Duração Aprox. |
| :--- | :--- | :--- | :--- |
| **Navegação** | Rotas, manipulação de parâmetros, layouts e páginas de erro 404. | React Router | 55min |
| **Formulários em React** | Inputs controlados/não controlados e gerenciamento avançado de validação de dados. | React Hook Form | 52min |
| **Tailwind CSS** | Estilização de componentes através de classes utilitárias para interfaces modernas e ágeis. | Tailwind CSS | 3h 42min |
| **Requisições HTTP e API** | Consumo de APIs (back-end), uso de Contextos, paginação e upload de imagens no front-end. | Context API, Fetch/Axios | 2h 58min |
| **Deploy Front-end** | Hospedagem da aplicação front-end na web e integração contínua básica com GitHub. | GitHub | 56min |

---

## 🛠️ Tecnologias e Ferramentas Chave

Este repositório aplica as tecnologias mais demandadas pelo mercado atual:

| Categoria | Tecnologias Aplicadas |
| :--- | :--- |
| **Linguagens** | `JavaScript`, `TypeScript` (Tipagem estática) |
| **Back-end** | `Node.js`, `Express` |
| **Front-end** | `React`, `React Router`, `React Hook Form`, `Tailwind CSS` |
| **Banco de Dados** | `SQL`, `PostgreSQL`, `SQLite` |
| **Acesso a Dados** | `Knex.js` (Query Builder), `Prisma` (ORM) |
| **Segurança & Validação** | `JWT` (Autenticação), `Zod` (Validação de Schemas) |
| **Testes** | `Jest` (Testes Automatizados e E2E) |
| **DevOps & Infra** | `Docker`, `Docker Compose`, `Deploy (Front e Back)` |

---

## 💻 Como executar os projetos

Como este repositório contém múltiplos módulos, geralmente cada pasta de projeto tem suas próprias dependências. O fluxo padrão para testar qualquer projeto localmente é:

1. Clone o repositório:
```bash
git clone [https://github.com/alissonpef/Full-Stack-Rocketseat.git](https://github.com/SeuUsuario/NomeDoRepositorio.git)