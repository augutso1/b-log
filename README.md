# 📖 b-log
### **🛠 Status do Projeto**
![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)  

Bem-vindo ao **b-log**! 🚀 Um blog pessoal desenvolvido para compartilhar ideias, reflexões e conteúdos exclusivos.

## ✨ Sobre o Projeto

O **b-log** é um blog pessoal onde apenas o dono do projeto pode gerenciar os posts. Usuários podem se inscrever para receber atualizações (sem pagamento, como uma newsletter). O projeto utiliza tecnologias modernas para garantir performance, segurança e facilidade de desenvolvimento.

## 🛠 Tecnologias Utilizadas

### **Frontend** (Interface do Usuário)

- ⚛️ **React** (SPA para renderização de páginas)
- 📜 **TypeScript** (Tipagem estática para melhor manutenção)
- 🚏 **React Router** (Gerenciamento de rotas)
- 🔗 **Axios** (Consumo da API)
- 🎨 **Tailwind CSS** (Estilização rápida e responsiva)

### **Backend** (Servidor e Banco de Dados)

- 🟢 **Node.js** + **Express.js** (API REST para gerenciar o blog)
- 🐘 **PostgreSQL** (Banco de dados relacional)
- 🔐 **JWT** (Autenticação segura por token)

### **Ferramentas e Utilitários**

- 🐙 **Git & GitHub** (Controle de versão e repositório)
- 🐳 **Docker** (Containerização para ambiente isolado)
- 📮 **Postman** (Testes e desenvolvimento da API)

## 📂 Estrutura do Projeto

```bash
b-log/
├── backend/                  # Backend (Node.js + Express)
│   ├── src/
│   │   ├── config/          # Configurações do projeto
│   │   ├── controllers/     # Controladores das rotas
│   │   ├── models/          # Modelos do banco de dados
│   │   ├── routes/          # Definição das rotas da API
│   │   ├── services/        # Lógica de negócio
│   │   ├── middleware/      # Middlewares (autenticação, validação)
│   │   ├── utils/           # Funções auxiliares
│   │   └── index.ts         # Ponto de entrada
│   ├── migrations/          # Migrações do banco de dados
│   ├── seeders/             # Dados iniciais (opcional)
│   └── .env                 # Variáveis de ambiente
│
├── frontend/                # Frontend (React + TypeScript)
│   ├── public/              # Arquivos estáticos
│   ├── src/
│   │   ├── assets/          # Imagens, ícones, fonts
│   │   ├── components/      # Componentes reutilizáveis
│   │   ├── pages/           # Páginas do blog
│   │   ├── hooks/           # Hooks customizados
│   │   ├── context/         # Contextos globais
│   │   ├── services/        # Chamadas à API
│   │   ├── styles/          # Estilos globais
│   │   ├── types/           # Definição de tipos TypeScript
│   │   ├── utils/           # Funções auxiliares
│   │   ├── App.tsx          # Componente principal
│   │   └── main.tsx         # Ponto de entrada
│   ├── .env                 # Variáveis de ambiente
│   └── tsconfig.json        # Configuração do TypeScript
│
├── database/                # Configurações do banco de dados
│   ├── schema.sql           # Esquema do banco de dados
│   └── seed.sql             # Dados iniciais (opcional)
│
├── .gitignore               # Arquivos ignorados pelo Git
├── README.md                # Documentação do projeto
└── package.json             # Dependências e scripts do projeto
```

## 🚀 Como Rodar o Projeto

### **1️⃣ Clonar o Repositório**

```bash
git clone https://github.com/seu-usuario/b-log.git
cd b-log
```

### **2️⃣ Configurar o Backend**

```bash
cd backend
cp .env.example .env  # Configurar as variáveis de ambiente
npm install            # Instalar dependências
npm run dev            # Iniciar o servidor backend
```

### **3️⃣ Configurar o Frontend**

```bash
cd frontend
cp .env.example .env  # Configurar as variáveis de ambiente
npm install           # Instalar dependências
npm run dev           # Iniciar o frontend
```

### **4️⃣ Acessar a Aplicação**

- 🌍 **Frontend:** `http://localhost:3000`
- 🔗 **Backend (API):** `http://localhost:5000`

## 🔑 Autenticação

O projeto utiliza **JWT (JSON Web Token)** para autenticação de usuários. Para acessar rotas protegidas, um token válido deve ser enviado no **header Authorization**.

## 🛠 Desenvolvimento e Testes

- 🐳 **Rodar o projeto com Docker**

```bash
docker-compose up --build
```

- 📮 **Testar API com Postman**
  Importe a collection do Postman localizada em `docs/postman_collection.json`.

## 📜 Licença

Este projeto está sob a licença **MIT**. Sinta-se livre para usar e modificar! 😊

---

🚀 **Desenvolvido com paixão e código limpo!** Se tiver dúvidas ou sugestões, sinta-se à vontade para contribuir! 💡
