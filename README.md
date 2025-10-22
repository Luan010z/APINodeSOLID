# GymPass-APINodeSOLID

API estilo GymPass desenvolvida com princípios SOLID, usando TypeScript e PostgreSQL. Permite cadastro e autenticação de usuários, check-ins em academias, validação de check-ins e busca de academias.

## Funcionalidades

- Cadastro e autenticação de usuários
- Consulta do perfil do usuário logado
- Histórico e quantidade de check-ins
- Busca de academias por proximidade (até 10 km) e nome
- Realização e validação de check-ins (validação feita por administradores)
- Cadastro de academias (restrito a administradores)
- Segurança com criptografia de senha e autenticação via JWT
- Paginação de listas com 20 itens por página

---

## Pré-requisitos

- Node.js instalado (versão recomendada 18 ou superior)
- PostgreSQL rodando e configurado
- Git para clonar o repositório

---

## Como configurar

1. Clone o repositório:

```

git clone https://github.com/luaviduedo/GymPass-APINodeSOLID.git
cd GymPass-APINodeSOLID

```

2. Instale as dependências:

```

npm install

```

3. Configure as variáveis de ambiente para conexão com o banco PostgreSQL e JWT. Crie um arquivo `.env` com algo assim:

```

DATABASE_URL=postgres://usuario:senha@localhost:5432/nome_do_banco
JWT_SECRET=sua_chave_secreta

```

4. Execute as migrações e seeders para criar as tabelas e dados iniciais (caso aplicável). Confira os scripts npm no `package.json` para isso.

---

## Como executar

Para rodar a aplicação em modo de desenvolvimento com hot reload:

```

npm run dev

```

A API estará disponível em `http://localhost:3000` (ou porta configurada).

---

## Endpoints Principais

- `POST /signup`: Cadastro de usuário
- `POST /login`: Autenticação de usuário
- `GET /profile`: Dados do perfil do usuário logado
- `GET /check-ins`: Histórico de check-ins do usuário
- `POST /check-ins`: Check-in em uma academia (validação de proximidade)
- `POST /check-ins/validate`: Validação de check-in (administrador)
- `GET /gyms`: Busca de academias por localização e nome
- `POST /gyms`: Cadastro de academia (administrador)

---

## Exemplo de uso com curl

Cadastrar usuário:

```

curl -X POST http://localhost:3000/signup -d '{"email":"usuario@exemplo.com","password":"senha123"}' -H "Content-Type: application/json"

```

Autenticar usuário:

```

curl -X POST http://localhost:3000/login -d '{"email":"usuario@exemplo.com","password":"senha123"}' -H "Content-Type: application/json"

```

Realizar check-in:

```

curl -X POST http://localhost:3000/check-ins -d '{"gymId":"id_da_academia"}' -H "Authorization: Bearer seu_token_jwt" -H "Content-Type: application/json"

```

---

## Considerações finais

- A senha do usuário é armazenada criptografada.
- O token JWT é necessário para acessar endpoints protegidos.
- A API aplica regras de negócio como limite de check-ins por dia e validação por proximidade.
- Administração das academias e validação de check-ins são restritas a usuários administradores.

---
