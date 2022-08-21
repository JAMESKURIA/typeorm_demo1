import express, { Application } from "express";
import path from "path";
import "reflect-metadata";
import { useContainer, useExpressServer } from "routing-controllers";
import Container from "typedi";
import { AppDataSource } from "../resources/data-source";

const app: Application = express();

const PORT = process.env.PORT || 8080;

// Middlewares
app.use(express.json());
useContainer(Container);

useExpressServer(app, {
  routePrefix: "/api/v1",
  controllers: [path.join(__dirname, "/**/controller/*.ts")],
});

// Initialize application
AppDataSource.initialize()
  .then(() => {
    console.log("\nSuccessfully connected to database\n");
    app.listen(PORT, () => console.log(`App running on port ${PORT}\n`));
  })
  .catch((error) => console.log("Error connecting to database: ", error));
