import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import { CustomerFactory } from "Database/factories";

export default class CostumerSeeder extends BaseSeeder {
  public async run() {
    await CustomerFactory.createMany(10);
  }
}
