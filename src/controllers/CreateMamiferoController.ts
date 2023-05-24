import { Request,Response } from "express";
import { database } from "../database";


export class CreateMamiferoController {
    async handle (request: Request,response: Response){
        const {nome,especie,idade,descrição} = request.body;

        const mamiferos = await database.mamiferos.create({
            data: {
                nome: "Guaxinim", 
                especie: 'Mamifero',
                idade: 2,
                voa: false,
                carnivoro: true,
                descricao:"Mamífero de porte médio, conhecido por sua pelagem cinza, máscara facial característica e habilidades de escalada."
              }
              

        })

        return response.json(mamiferos);
    }
}