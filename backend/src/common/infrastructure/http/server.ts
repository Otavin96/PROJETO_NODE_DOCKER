import { app } from "../http/app";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT;

app.listen(port, () => {
  console.log("Servidor online!!!");
});
