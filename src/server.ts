import app from "./app.js";
import config from "./config/index.js";
import { prisma } from "./lib/prisma.js";

const port = Number(process.env.PORT ?? config.port ?? 5000);




const main=async()=>{
   

  try{
       
        await prisma.$connect();
          console.log("database connected")
       app.listen(port,()=>{
          console.log(`server is running on port ${port}`)
       })
     }catch(error){
        console.error("Error starting the server", error)
        await prisma.$disconnect();
        process.exit(1);

     }


}

if (process.env.VERCEL !== "1") {
  main();
}

export default app;