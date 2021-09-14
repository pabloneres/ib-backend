import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import User from "App/Models/User";

export default class UserSeeder extends BaseSeeder {
  public async run() {
    await User.createMany([
      {
        username: "pablo",
        email: "pablo@adonisjs.com",
        password: "secret",
      },
      {
        username: "pablo2",
        email: "romain@adonisjs.com",
        password: "supersecret",
      },
    ]);
  }
}
