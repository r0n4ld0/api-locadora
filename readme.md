# API Locadora de Filmes
> Sistema para uma locadora de filmes, com a funcionalidades abaixo.
 
- [x] Permitir a criação de usuários (cliente).
- [x] Realizar a autenticação do usuário (Login).
- [x] Encerrar a sessão do usuário (Logoff).
- [x] Fazer o cadastro de filmes.
- [x] Listar os filmes disponíveis para locação.
- [x] Filtrar os filmes pelo título.
- [x] Realizar a locação do filme escolhido pelo usuário.
- [x] Realizar a devolução do filme escolhido pelo usuário.
- [x] Listar os filmes locados pelo usuário.
 
### Banco de Dados:
- MySQL (Script para criação do banco de dados está na raiz do projeto com nome DB_LOCADORA.sql).
 
 
### Documentação da API disponível no link abaixo:
<a href="https://drive.google.com/file/d/1YcbZMxPqGGaXXafOS7ADz5VsLA42mC3j/view?usp=sharing">Link documentação</a>
 
## Clonar repositório
 
```
git clone https://github.com/r0n4ld0/api-locadora.git .
```
 
Instalar as dependências.
 
```
npm install
```
## Configure o banco de dados.
No arquivo ormconfig.js, informar Username, password e database.
```
const dbConfig = {
 name: 'default',
 type: 'mysql',
 host: 'localhost',
 port: 3306,
 username: 'root',
 password: '123456',
 database: 'locadora',
 synchronize: false,
 entities: ['./src/modules/**/entities/*.ts'],
 cli: {
   migrationsDir: './src/shared/infra/typeorm/migrations',
 },
};
 
```
## Iniciar aplicação

```
npm run start
```

URL padrão da apliação é: *http://localhost:3000*

## Testando Aplicação 

+ GET Todos os filmes disponíveis.

```
Enviar uma requisição GET para: http://localhost:3000/movies
```