/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from "@ioc:Adonis/Core/Route";

Route.post("/session", "SessionsController.auth");

Route.get("/", async () => {
  return { hello: "world" };
});

Route.group(() => {
  Route.get("/", "UsersController.index");
  Route.post("/", "UsersController.store");
}).prefix("users");

Route.group(() => {
  Route.get("/", "ProfilesController.index");
  Route.post("/", "ProfilesController.store");
}).prefix("profiles");

Route.group(() => {
  Route.get("/", "CustomersController.index");
  Route.post("/", "CustomersController.store");
})
  .prefix("costumers")
  .middleware(["auth"]);
