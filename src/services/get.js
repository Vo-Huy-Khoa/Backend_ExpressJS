const httpRequest = require("../utils/httpRequest");



const getData = async () => {
  try {
    const response = await httpRequest.get('courses');
    return response.data;
  } catch (error) {}
};

module.exports = getData;
