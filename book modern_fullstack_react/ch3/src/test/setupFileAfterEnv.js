import mongoose from "mongoose";
import { beforeAll, afterAll } from "@jest/globals";
import { initDatabase } from "../db/init";

// initialise database before running tests
beforeAll(async () => {
  await initDatabase();
});

// disconnect database after all tests are complete
afterAll(async () => {
  await mongoose.disconnect();
});
