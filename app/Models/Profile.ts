import { DateTime } from "luxon";
import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class Profile extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column()
  public user_id: number;

  @column()
  public firstname: string;

  @column()
  public lastname: string;

  @column()
  public zip: string;

  @column()
  public city: string;

  @column()
  public state: string;

  @column()
  public cpf: string;

  @column()
  public birth: string;

  @column()
  public cell: string;

  @column()
  public barbername: string;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
