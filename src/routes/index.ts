import { Router } from "express";
import { CreateMamiferoController } from "../controllers/CreateMamiferoController";

const router = Router();


const createmamifero = new CreateMamiferoController();

router.post('/mamifero',createmamifero.handle);




export { router};