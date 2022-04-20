import {LoginService} from '../Services/LoginService';
import { Request, Response } from "express";

export class LoginController {

  static async register(req: Request, res: Response) {
    try {
      const result = await LoginService.register(req);
      return res.json(result);
    } catch (error) {
      return res.json({
        type: false,
        message: 'Bir Hata Oluştu.'
      })
    }
  }

  static async getAll(req: Request, res: Response) {
    try {
      const result = await LoginService.getAll();
      return res.json(result);
    } catch (error) {
      return res.json({
        type: false,
        message: 'Bir Hata Oluştu.'
      })
    }
  }

  static async getById(req: Request, res: Response) {
    try {
      const result = await LoginService.getById(req);
      return res.json(result);
    } catch (error) {
      return res.json({
        type: false,
        message: 'Bir Hata Oluştu.'
      })
    }
  }

}