import express from "express";

import { createBooksController, getAllBooksController } from "../DependenciesBooks";
export const  booksRouter = express.Router();

booksRouter.get(
    "/",
    getAllBooksController.run.bind(getAllBooksController)
);

booksRouter.post(
    "/",
    createBooksController.run.bind(createBooksController)
);