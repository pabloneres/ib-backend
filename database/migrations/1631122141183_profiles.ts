import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class Profiles extends BaseSchema {
  protected tableName = "profiles";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id");

      table
        .integer("user_id")
        .references("id")
        .inTable("users")
        .notNullable()
        .onDelete("CASCADE")
        .onUpdate("CASCADE");

      table.string("firstname");
      table.string("lastname");

      table.string("zip");
      table.string("city");
      table.string("state");

      table.string("cpf");
      table.string("birth");

      table.string("cell");

      table.string("barbername");

      table.timestamp("created_at", { useTz: true });
      table.timestamp("updated_at", { useTz: true });
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
