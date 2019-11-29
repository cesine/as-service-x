const { MOCK_LATENCY = 1000 } = process.env;

const mockedDB = {};

module.exports = {
  get: (key) => new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockedDB[key]);
    }, MOCK_LATENCY);
  }),
  set: (key, value) => new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockedDB[key] = value);
    }, MOCK_LATENCY);
  }),
};
