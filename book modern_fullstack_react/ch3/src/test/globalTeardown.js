// stop the mongodb instance when tests are finished

export default async function globalTeardown() {
  await global._MONGOINSTANCE.stop();
}
