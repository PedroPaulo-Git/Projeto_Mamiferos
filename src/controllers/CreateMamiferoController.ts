import { Request,Response } from "express";
import { database } from "../database";


export class CreateMamiferoController {
    async handle (request: Request,response: Response){
        const {nome,especie,idade} = request.body;

        const mamiferos = await database.mamiferos.create({
            data: {
                nome: "Guaxinim", 
                especie: 'Mamifero',
                idade: 2,
                voa: false,
                carnivoro: true
              }
              

        })

        return response.json(mamiferos);
    }
}