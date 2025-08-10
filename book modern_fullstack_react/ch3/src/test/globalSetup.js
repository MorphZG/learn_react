// mongo-memory-server
// https://github.com/typegoose/mongodb-memory-server
// creates fresh mongodb server in working memory
// enables unit testing in clean isolated environment

import { MongoMemoryServer } from "mongodb-memory-server";

async function globalSetup() {
  const instance = await MongoMemoryServer.create({
    binary: {
      // binary version equal to mongo docker container
      version: "6.0.4",
    },
  });
  // store the mongodb instance as a global variable
  global._MONGOINSTANCE = instance;
  process.env.DATABASE_URL = instance.getUri();
}

export default globalSetup;
