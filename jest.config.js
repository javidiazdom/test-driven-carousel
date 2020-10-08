module.exports = {
  setupFilesAfterEnv: ['./src/test/jestSetup.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
};
