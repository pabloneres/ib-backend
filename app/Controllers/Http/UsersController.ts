import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import User from "App/Models/User";

export default class UsersController {
  async index() {
    const users = await User.all();
    return users;
  }

  async store({ request }: HttpContextContract) {
    const data = request.all();
    const user = await User.create(data);

    return user;
  }
}
