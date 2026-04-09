# Bem-vindo(a) ao meu Repositório! 👋

Este repositório é o seu guia completo e prático para dominar a construção de APIs robustas, seguras e prontas para produção. Cobrimos desde os fundamentos mais básicos do runtime Node.js até a implementação de arquiteturas complexas, containers (Docker) e o uso de ORMs avançados como o Prisma.

Aqui você encontrará todo o código-fonte, projetos e desafios práticos desenvolvidos ao longo da jornada.

---

## 📚 Estrutura do Módulo Node.js

O curso é dividido em três níveis principais de complexidade, garantindo uma progressão de aprendizado lógica e eficaz.

### Nível 1: Iniciando no Node.js (Fundamentos)

Este módulo foca na base do desenvolvimento backend.

| Módulo | Foco Principal | Duração Aprox. |
| :--- | :--- | :--- |
| **Fundamentos do Node.js** | Criação e configuração de servidores básicos utilizando o módulo nativo **HTTP**, implementação de `middlewares`, e conceitos essenciais de **API**. | 5h 25min |

**Outcomes:** Entendimento sólido de como o Node.js processa requisições e manipula dados sem o uso de frameworks externos.

### Nível 2: API REST com Node.js

Avançamos para a construção de APIs de forma profissional, introduzindo frameworks e acesso a banco de dados.

| Módulo | Foco Principal | Tecnologias | Duração Aprox. |
| :--- | :--- | :--- | :--- |
| **Criando API REST** | Desenvolvimento de APIs RESTful utilizando **Express**, definição de rotas e validação de dados com **Zod**. | Express, Zod | 2h 54min |
| **Banco de dados** | Conceitos fundamentais de Bancos de Dados Relacionais e **SQL** (chaves, relacionamentos, design de banco de dados e otimização de consultas). | SQL | 3h 19min |
| **Query Builder** | Configuração e uso do **Knex.js** para construir consultas dinâmicas, realizar migrações e gerenciar transações. | Knex.js | 1h 35min |
| **Projeto: API de Restaurante** | Prática consolidada dos conceitos de API REST, SQL e Query Builders, desenvolvendo um projeto do zero. | Express, Knex, SQL | 3h 03min |

### Nível 3: Node.js com Containers (Produção e Escala)

Este nível leva a aplicação para um ambiente de produção, cobrindo ferramentas de conteinerização, segurança e qualidade de código.

| Módulo | Foco Principal | Tecnologias | Duração Aprox. |
| :--- | :--- | :--- | :--- |
| **Containers** | Uso de **Docker** e **Docker Compose** para criar e gerenciar containers de aplicações Node e bancos de dados (**Postgres/SQLite**), e persistência de dados (Volumes). | Docker, Docker Compose, Postgres | 1h 59min |
| **ORM** | Exploração do conceito de ORM e implementação prática com o **Prisma ORM** para manipulação simplificada de bancos de dados. | Prisma ORM | 1h 18min |
| **Autenticação e Autorização** | Implementação de segurança utilizando tokens **JWT**, diferenciando autenticação e autorização na prática. | JWT | 1h 07min |
| **Testes Automatizados** | Desenvolvimento de testes automatizados com **Jest**, cobrindo testes unitários, critérios de teste e testes *end-to-end*. | Jest | 59min |
| **Projeto: API de Entregas** | Construção de uma API completa para um aplicativo de delivery, integrando **Docker, Postgres, Prisma e Zod**. **Peça de Portfólio de Alto Nível.** | Prisma, Zod, Docker, Express | 3h 21min |
| **Deploy** | Fase de publicação: colocar a aplicação e o banco de dados em um servidor, deixando-a acessível em produção. | | 1h 09min |
| **Manutenção** | Gerenciamento de dependências em projetos Node (atualização e solução de *breaking changes*). | | 1h 44min |

---

## 🛠️ Tecnologias e Ferramentas Chave

Este curso fornece experiência prática com as seguintes tecnologias essenciais no mercado:

| Categoria | Tecnologias Aplicadas |
| :--- | :--- |
| **Runtime & Linguagem** | `Node.js`, `JavaScript` |
| **Frameworks Web** | `Express` (Criação de APIs) |
| **Banco de Dados** | `SQL`, `Postgres`, `SQLite` |
| **Acesso a Dados** | `Knex.js` (Query Builder), `Prisma ORM` (Object-Relational Mapping) |
| **Segurança** | `JWT` (JSON Web Tokens) |
| **Testes** | `Jest` (Testes Automatizados e E2E) |
| **DevOps & Ferramentas** | `Docker`, `Docker Compose` (Conteinerização), `Zod` (Validação de Dados) |

---

## 🚀 Projetos Práticos e Resultados

Ao final deste curso, você terá construído e domínio a manutenção dos seguintes projetos:

1.  **API REST para um Restaurante:** Aplicação focada em rotas, Query Builders e manipulação de dados SQL.
2.  **API de Entregas de Encomendas:** Projeto *Full Stack Ready*, utilizando **Docker, ORM (Prisma), Zod** e integrando autenticação, ideal para portfólio.
3.  **Desafio Prático - Gerenciador de Tarefas:** Um desafio opcional para desenvolver uma API completa com autenticação, autorização (`Admin` e `Membros`) e gerenciamento de tarefas.
4.  **Projeto Bônus: API do APP Refund 2.0:** Projeto extra de alta complexidade com foco em manipulação de arquivos (upload, validação) e regras de negócio robustas.

---

## 📑 Comandos Úteis

```bash
    npm init -y
    npm i express
    npm i -D typescript @types/node
    npx tsc --init
```
