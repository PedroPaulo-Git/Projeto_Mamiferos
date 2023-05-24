import { Request,Response } from "express";
import { database } from "../database";


export class FindMamiferoController {
    async handle (request: Request,response: Response){

        const { nome: nomeparametro } = request.params;
        const { nome: nomecorpo } = request.body;

        const mamiferos = await database.mamiferos.findMany({
            where: {
                OR: [
                  { nome: { contains: nomeparametro } },
                  { nome: { contains: nomecorpo } }
                ]
              },
        })

        return response.json(mamiferos);
    }
}