import { Request,Response } from "express";
import { database } from "../database";


export class UpdateMamiferoController{
    async handle (request: Request, response: Response){
        const {id} = request.params
        const {nome,especie,idade,voa,carnivoro} = request.body;

        const mamiferos = await database.mamiferos.update({
            where:{
                id:Number(id)
            },
            data: {
                nome: nome, 
                especie:especie,
                idade: idade,
                voa: voa,
                carnivoro: carnivoro
              }
            })
        

        return response.json(mamiferos);
    }
}