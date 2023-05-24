import { Request,Response } from "express";
import { database } from "../database";
import { describe } from "node:test";


export class UpdateMamiferoController{
    async handle (request: Request, response: Response){
        const {id} = request.params
        const {nome,especie,idade,voa,carnivoro,descricao} = request.body;

        const mamiferos = await database.mamiferos.update({
            where:{
                id:Number(id)
            },
            data: {
                nome: nome, 
                especie:especie,
                idade: idade,
                voa: voa,
                carnivoro: carnivoro,
                descricao:descricao
              }
            })
        

        return response.json(mamiferos);
    }
}