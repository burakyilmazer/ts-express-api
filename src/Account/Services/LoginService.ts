import { Request, Response } from "express";
import {db} from '../../data-source';
export class LoginService {

  static async register(req: Request) {
    try {
      const body = req.body;
      const result = await db.User.save(body);
      console.log(result);
      return {type: true, message: '', data: result}
    } catch (error) {
      throw error
    }
  }

  static async getAll() {
    try {
      const result = await db.User.find();
      return {type: true, message: '', data: result}
    } catch (error) {
      throw error
    }
  }

  static async getById(req: Request) {
    try {
      const {id} = req.params;
      const result = await db.User.findOneBy({id: Number(id)});
      return {type: true, message: '', data: result}
    } catch (error) {
      throw error
    }
  }

}