import ApiError from "../error/ApiError";
import {GroupModel} from "../models/group";
import UserService from "./UserService";
import {UserModel} from "../models/user";

export default class GroupService {
  static async getGroup(id: string) {
    try {
      return GroupModel.findById(id).populate('owner').populate('users');
    } catch (e) {
      throw ApiError.notFound("Group not found")
    }
  }

  static async createGroup(group: any) {
    const newGroup = new GroupModel({
      name: group.name,
      description: group.description,
      owner: group.owner,
      users: group.users,
      expenses: [],
    })
    try {
      await newGroup.save();
      await UserModel.findByIdAndUpdate(
        group.owner,
        {$push: {groups: newGroup._id}}
      )
      return newGroup;
    } catch (e) {
      throw ApiError.internal("Something went wrong during group creation")
    }
  }

  static async updateGroup(id: string, group: any) {
    const currentGroup = await this.getGroup(id)
    try {
      await currentGroup.updateOne(group);
    } catch (e) {
      throw ApiError.internal("Something went wrong during group update")
    }
  }

  static async deleteGroup(id: string) {
    const group = await this.getGroup(id)
    try {
      group.delete();
    } catch (e) {
      throw ApiError.internal("Something went wrong during group deletion")
    }
  }

  static async addUser(id: string, user: any) {
    const group = await this.getGroup(id)
    try {
      group.users.push(user.id);
    } catch (e) {
      throw ApiError.internal("Something went wrong during user addition")
    }
  }

  static async removeUser(id: string, user: any) {
    const group = await this.getGroup(id)
    const userToRemove = await UserService.getUserInfos(user._id)
    try {
      group.updateOne({}, {
        $pull: {
          users: {_id: user.id}
        }
      });

      userToRemove.updateOne({}, {
        $pull: {
          groups: {_id: group.id}
        }
      });
    } catch (e) {
      throw ApiError.internal("Something went wrong during user deletion")
    }
  }
}