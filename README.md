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

## Considerações finais

- A senha do usuário é armazenada criptografada.
- O token JWT é necessário para acessar endpoints protegidos.
- A API aplica regras de negócio como limite de check-ins por dia e validação por proximidade.
- Administração das academias e validação de check-ins são restritas a usuários administradores.

---
