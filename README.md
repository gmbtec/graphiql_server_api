# Aplicação BACKEND  
## Api GraphQL / Apolo Server / KNEX

### Passo 01

Instalação
> npm install

## Passo 02 - Configuração do Base de Dados Postgres 
### Arquivo do knexfile.js
```
  module.exports = {
   client: "pg",
   connection: {
     database: "postgres",
     user: "postgres",
     password: "123456",
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: "knex_migrations",
    directory: "./src/db/migrations",
  },
};

```

### Passo 03 - Criacao da Tabela MIGRATIONS
```
 npx knex migrate:make create_table_alunos
 npx knex migrate:latest
```

### Passo 04 - Executar a aplicação
```
 npm start
```

> http://localhost:4000/

### Passo 05 - Após executar, poderá popular a tabela de teste com os seguintes comandos do GraphQL
```
mutation{
  criarAluno(
      data:{
      nome : "Aluno A",
      email : "alunoa@gmail.com",
      cpf : "00000000008"
    } 
  )

  {
    id
    nome
    email
    cpf
  }
  
}
```

### Lista de Registros Cadastrados 
```
 query
{
  alunos{
    id nome email cpf
  }
  
}
```
