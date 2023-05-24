import { Router } from "express";
import { CreateMamiferoController } from "../controllers/CreateMamiferoController";
import { FindMamiferoController } from "../controllers/FindMamiferosController";
import { DeleteMamiferoController } from "../controllers/DeleteMamiferosController";


const router = Router();

const findmamiferos = new FindMamiferoController();
const createmamifero = new CreateMamiferoController();
const deletemamifero = new DeleteMamiferoController();

router.post('/mamifero',createmamifero.handle);
router.get('/mamifero/:nome', findmamiferos.handle);
router.delete ('/mamifero/:id', deletemamifero.handle);

export { router};