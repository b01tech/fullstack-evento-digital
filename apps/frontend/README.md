# Frontend - Evento Digital

Aplicação de gerenciamento de eventos desenvolvida com **Next.js**, focada em **Clean Architecture** e performance.

## 🚀 Tecnologias

- **Framework:** Next.js 15+ (App Router)
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS
- **Arquitetura:** Clean Architecture (Domain-Driven Design simplificado)

## 📂 Estrutura do Projeto

A aplicação separa estritamente as regras de negócio da interface:

- `src/core`: Contém a lógica de negócio pura, entidades e casos de uso (independente do framework).
- `src/app`: Camada de apresentação (Next.js App Router).
- `src/components`: Componentes visuais reutilizáveis.

## 🛠️ Como Rodar

1. Instale as dependências:
```bash
npm install
```

2. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

3. Acesse `http://localhost:3000`.

