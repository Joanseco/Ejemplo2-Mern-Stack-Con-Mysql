import express from "express";
import { PORT } from "./config.js";

import indexRoutes from "./routes/index.routes.js";
import taskRoutes from "./routes/tasks.routes.js";

const app = express();

app.use(express.json())

app.use(taskRoutes);
app.use(indexRoutes);

app.listen(PORT);
console.log(`Puerto escuchado en el puerto ${PORT}`);
