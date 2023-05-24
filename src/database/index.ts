<<<<<<< HEAD
import { PrismaClient, Mamiferos } from '@prisma/client';


    
    const database = new PrismaClient({

        log:["error", "info", "query","warn"]
    });
   

=======
import { PrismaClient, Mamiferos } from '@prisma/client';


    
    const database = new PrismaClient({

        log:["error", "info", "query","warn"]
    });
   

>>>>>>> b05f33c659820a53a6f5fe198abe84c2c9067ff7
export {database};