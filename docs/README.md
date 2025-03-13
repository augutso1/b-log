# Documentação do Projeto

Esta pasta contém os diagramas que descrevem a arquitetura, funcionalidades e estrutura do projeto. Abaixo está uma explicação do propósito de cada diagrama.

---

## Diagramas

### 1. **Diagrama de Caso de Uso**

- **Arquivo**: `b-log_case_of_use.png`
- **Propósito**: Este diagrama descreve as interações entre os usuários e o sistema, mostrando as funcionalidades principais do blog.
- **Funcionalidades Representadas**:
  - Criar, ler, atualizar e deletar posts.
  - Gerenciar assinaturas.
  - Autenticação de usuários.

---

### 2. **Diagrama de Classes**

- **Arquivo**: `b-log_class.png`
- **Propósito**: Este diagrama representa a estrutura das classes do sistema, incluindo atributos, métodos e relacionamentos entre elas.
- **Classes Principais**:
  - `User`: Representa os usuários do blog.
  - `Post`: Representa os posts publicados.
  - `Admin`: Representa o administrador do blog.
  - `Newsletter`: Representa o envio dos posts via email.
  - `Comment`: Representa os comentários publicados dentro dos posts.
  - `Authentication`: Representa a autenticação dos usuários assinantes da Newsletter e o Logout.

---

### 3. **Diagrama de Implantação (Deployment Diagram)**

- **Arquivo**: `implantacao.png` ou `implantacao.drawio`
- **Propósito**: Este diagrama mostra como os componentes do sistema são implantados em produção, incluindo servidores, bancos de dados e comunicação entre eles.
- **Componentes Representados**:
  - **Frontend**: Aplicação React hospedada na Vercel/Netlify.
  - **Backend**: API Node.js + Express hospedada no Heroku/Render.
  - **Banco de Dados**: PostgreSQL/MySQL hospedado no AWS RDS/ElephantSQL.
- **Como Usar**: Use este diagrama para planejar a infraestrutura e entender como os componentes se comunicam.

---

### 4. **Diagrama de Componentes**

- **Arquivo**: `componentes.png` ou `componentes.drawio`
- **Propósito**: Este diagrama descreve os componentes do sistema e suas dependências, tanto no frontend quanto no backend.
- **Componentes Principais**:
  - **Frontend**: Componentes React (ex: `Header`, `PostList`, `SubscriptionForm`).
  - **Backend**: Módulos Node.js (ex: `UserController`, `PostService`, `AuthMiddleware`).
- **Como Usar**: Use este diagrama para entender a modularização do sistema e como os componentes interagem.

---

## Como Atualizar os Diagramas

1. Abra os arquivos editáveis (ex: `.drawio`) nas ferramentas de diagramação (ex: Draw.io, Lucidchart).
2. Faça as alterações necessárias.
3. Exporte os diagramas para PNG ou SVG e salve na pasta `docs/`.
4. Atualize este `README.md` se houver mudanças significativas nos diagramas.

---

## Ferramentas Utilizadas

- **Draw.io**: Para criar e editar diagramas.
- **Lucidchart**: Alternativa para diagramas mais complexos.
- **GitHub/GitLab**: Para versionamento e compartilhamento da documentação.

---

## Links Úteis

- [Documentação do Draw.io](https://www.diagrams.net/)
- [Documentação do Lucidchart](https://www.lucidchart.com/pages/)
