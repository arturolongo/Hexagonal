import express from "express";
import morgan from "morgan";
import { Signale } from "signale";
import * as dotenv from "dotenv";

import { supplierRouter } from "./supliers/infrastructure/routes/SupplierRouter";
import { booksRouter } from "./product/infrastructure/routes/BooksRouter";
const app = express();
dotenv.config();
app.use(morgan("dev"));
app.use(express.json());
app.use("/books",booksRouter)
app.use("/supliers", supplierRouter)

const port: string | undefined = process.env.PORT || "3000";

const signale = new Signale();

app.listen(3000, () => {
  signale.success("Servidor escuchando en el puerto:", port);
});
