<<<<<<< HEAD
import express  from "express";
import { router } from "../routes";

    const app = express ();
    app.use(express.json());
    app.use(router);
   
    app.listen(3333, () => {
        console.log("servidor online na porta 3333")
=======
import express  from "express";
import { router } from "../routes";

    const app = express ();
    app.use(express.json());
    app.use(router);
   
    app.listen(3333, () => {
        console.log("servidor online na porta 3333")
>>>>>>> b05f33c659820a53a6f5fe198abe84c2c9067ff7
     });