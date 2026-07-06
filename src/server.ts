import app from "./app";
import { prisma } from "./lib/prisma";

const port=5000;


const main=async()=>{
   

  try{
       
        await prisma.$connect();
          console.log("databse connect")
       app.listen(5000,()=>{
          console.log(`server is running on port 5000 ${port}`)
       })
     }catch(error){
        console.error("Error starting the server", error)
        await prisma.$disconnect();
        process.exit(1);

     }


}

main();