export default class SessionsController {
  async auth({ request, auth }) {
    const { email, password } = request.all();

    const token = await auth.use("api").attempt(email, password);

    return token;
  }
}
