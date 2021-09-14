import Factory from "@ioc:Adonis/Lucid/Factory";
import User from "App/Models/User";
import Customer from "App/Models/Customer";

export const UserFactory = Factory.define(User, ({ faker }) => {
  return {
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
}).build();

export const CustomerFactory = Factory.define(Customer, ({ faker }) => {
  return {
    user_id: 1,
    firstname: faker.name.firstName(),
    lastname: faker.name.lastName(),
    email: faker.internet.email(),
    zip: faker.address.zipCode(),
    city: faker.address.cityName(),
    state: faker.address.state(),
    birth: faker.datatype.string(),
    cell: faker.phone.phoneNumber(),
  };
}).build();
