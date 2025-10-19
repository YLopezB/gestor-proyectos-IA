import express from "express"
import 'dotenv/config.js';
import cors from "cors"
import swagger from "./swagger/swagger.js"
import swaggerUI from "swagger-ui-express"
import routerIndex from "./routes/index.js"
import error_404 from "./middlewares/error_404.js";
import error_400 from "./middlewares/error_400.js";
import error_500 from "./middlewares/error_500.js";


const app = express()
const PORT = process.env.PORT || 8080
const ready = ()=> console.log(`Servidor corriendo en el puerto: ${PORT}`);

app.use(express.json())
app.use(cors())

app.use("/docs", swaggerUI.serve, swaggerUI.setup(swagger))
app.use("/api", routerIndex)
app.use(error_404)
app.use(error_400)
app.use(error_500)

app.listen(PORT, ready)
