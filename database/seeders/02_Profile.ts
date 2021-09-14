import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import Profile from "App/Models/Profile";

export default class ProfileSeeder extends BaseSeeder {
  public async run() {
    await Profile.create({
      user_id: 1,
      firstname: "Pablo",
      lastname: "Neres",
      zip: "07175-140",
      city: "Guarulhos",
      state: "SP",
      cpf: "49774922859",
      birth: "16/06/1999",
      cell: "11958528808",
      barbername: "PabloBarber",
    });
  }
}
