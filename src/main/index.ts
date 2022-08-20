import express, { Application } from "express";
import "reflect-metadata";
import { useContainer, useExpressServer } from "routing-controllers";
import Container from "typedi";
import { AppDataSource } from "../resources/data-source";
import { BookController } from "./books/controller/BookController";
import { UserController } from "./user/controller/UserController";

const app: Application = express();

const PORT = process.env.PORT || 8080;

useExpressServer(app, {
  routePrefix: "/api/v1",
  controllers: [UserController, BookController],
});

// Middlewares
app.use(express.json());
useContainer(Container);

// Initialize application
AppDataSource.initialize()
  .then(() => {
    console.log("\nSuccessfully connected to database\n");
    app.listen(PORT, () => console.log(`App running on port ${PORT}\n`));
  })
  .catch((error) => console.log("Error connecting to database: ", error));
