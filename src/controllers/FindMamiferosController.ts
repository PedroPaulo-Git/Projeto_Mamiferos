import { Request,Response } from "express";
import { database } from "../database";


export class FindMamiferoController {
    async handle (request: Request,response: Response){
        const {nome} = request.params;

        const mamiferos = await database.mamiferos.findMany({
            where:{
                nome:String(nome)
            }
        })

        return response.json(mamiferos);
    }
}