import {UserModel} from '../models/user';
import {User} from "../types/user";

export default class UserService {
    public static async login(email: string) {
        return UserModel.findOne({email: email});
    }

    static async signup(user: User) {
        const newUser = new UserModel({
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
        })
        return await newUser.save();
    }

    static async getUserInfos(id: string) {
        return UserModel.findById(id);
    }

    static async getUserGroups(id: string) {
        return UserModel.find({id}, {groups: 1}).populate('groups');
    }

    static async updateUserInfos(id: string, user: User) {
        return UserModel.findByIdAndUpdate(id, user);
    }

    static async deleteUser(id: string) {
        return UserModel.findByIdAndDelete(id);
    }
}