import {UserModel} from '../models/User';

export default class UserService {
  public static async login(mail: string) {
    return UserModel.findOne({email: mail});
  }
}