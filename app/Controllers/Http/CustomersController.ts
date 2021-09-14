// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Costumer from "App/Models/Customer";

export default class CustomersController {
  async index({ auth, request }) {
    const costumers = await Costumer.query().where("user_id", auth.user.id);
    return costumers;
  }
}
