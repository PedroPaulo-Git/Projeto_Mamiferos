import { Router } from "express";
import { CreateMamiferoController } from "../controllers/CreateMamiferoController";
import { FindMamiferoController } from "../controllers/FindMamiferosController";
import { DeleteMamiferoController } from "../controllers/DeleteMamiferosController";
import { UpdateMamiferoController } from "../controllers/UpdateMamiferosController";


const router = Router();

const findmamifero = new FindMamiferoController();
const createmamifero = new CreateMamiferoController();
const deletemamifero = new DeleteMamiferoController();
const updatemamifero = new UpdateMamiferoController();

router.post('/mamifero',createmamifero.handle);
router.get('/mamifero/:nome', findmamifero.handle);
router.get('/mamifero', findmamifero.handle);
router.delete ('/mamifero/:id', deletemamifero.handle);
router.put('/mamifero/:id', updatemamifero.handle );

export {router};