exports.up = function (knex) {
    return knex.schema.createTable("alunos", (table) => {
      table.increments("id").primary();
      table.string("nome").notNull();
      table.string("email").notNull().unique();
      table.string("cpf").notNull();
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable("alunos");
  };
  