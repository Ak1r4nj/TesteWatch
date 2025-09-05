**Sobre o Projeto**

Este projeto foi desenvolvido como parte do Desafio Técnico Fullstack Júnior da Watch Brasil.
O objetivo foi criar uma aplicação de gerenciamento de usuários (CRUD completo) utilizando:

Backend: Node.js + Fastify

Banco de Dados: PostgreSQL

Arquitetura: Serverless (AWS Lambda)

Infraestrutura: Serverless Framework + serverless-offline (simulação local)

Testes: Jest + Supertest

Documentação: Swagger (OpenAPI)

---

**Como rodar projeto local** 

1. Clonar repositório

```
git clone https://github.com/Ak1r4nj/TesteWatch.git
cd TesteWatch
```

2. Instalar dependências 
```
npm install 
```
3. Configurar variáveis de ambiente 

Crie um .env na raiz do projeto com as credenciais: 
```
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_HOST=localhost
DB_PORT=5432
DB_DATABASE=watchdb
PORT=3000
```
4. Rodar o PostgreSQL 

Utilizando o Docker:
```
docker run --name postgres-watch -e POSTGRES_USER=seu_usuario -e POSTGRES_PASSWORD=sua_senha -e POSTGRES_DB=watchdb -p 5432:5432 -d postgres
```
5. Rodar local (modo serverless)
```
npx sls offline
```
API estará disponível em 
```
http://localhost:3000
```
---

Rodar os testes automatizados (Jest + Supertest):
```
npm test
```

Exemplo de testes implementados:

Criar usuário (POST /users)

Listar usuários (GET /users)

Atualizar usuário (PUT /users/:id)

Deletar usuário (DELETE /users/:id)

CRUD de atividades (endpoints /activities)

---

**Documentação (Swagger)**

O projeto conta com documentação interativa da API via Swagger UI.
Para acessar:

Inicie o servidor (npx sls offline ou npm run dev).

Acesse no navegador:

```
http://localhost:3000/docs
```

Você poderá visualizar e testar os endpoints diretamente pela interface.

---

**Deploy** 

O projeto foi preparado para rodar em ambiente AWS Lambda + API Gateway.

O arquivo lambda.js contém o handler.

O serverless.yml configura o serviço.

Para deploy real seria necessário configurar credenciais IAM (aws configure) e rodar:
```
sls deploy
```