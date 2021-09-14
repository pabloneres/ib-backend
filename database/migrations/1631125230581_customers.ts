import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class Customers extends BaseSchema {
  protected tableName = "customers";

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

      table.string("email");

      table.string("zip");
      table.string("city");
      table.string("state");

      table.string("birth");

      table.string("cell");

      table.timestamp("created_at", { useTz: true });
      table.timestamp("updated_at", { useTz: true });
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
