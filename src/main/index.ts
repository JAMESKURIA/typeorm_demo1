import express, { Application } from "express";
import "reflect-metadata";
import { createExpressServer, useContainer } from "routing-controllers";
import Container from "typedi";
import { AppDataSource } from "../resources/data-source";
import { UserController } from "./user/controller/UserController";

const PORT = process.env.PORT || 8080;

const app: Application = createExpressServer({
  controllers: [UserController],
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
