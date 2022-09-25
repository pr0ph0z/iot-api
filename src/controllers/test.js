const { requestResponse } = require("@pptik/galileo");
const testService = require("../services/test");
let response;

async function index(req, res) {
  try {
    const testData = await testService.get();

    response = { ...requestResponse.success, data: testData };
  } catch (error) {
    logger.error(error);
    response = { ...requestResponse.server_error };
  }

  res.status(response.code).json(response);
}

module.exports = {
  index
};
