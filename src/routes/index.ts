import { Router } from "express";
import { CreateMamiferoController } from "../controllers/CreateMamiferoController";
import { FindMamiferoController } from "../controllers/FindMamiferosController";

const router = Router();

const findmamiferos = new FindMamiferoController();
const createmamifero = new CreateMamiferoController();

router.post('/mamifero',createmamifero.handle);
router.get('/mamifero/:nome', findmamiferos.handle);




export { router};