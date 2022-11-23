const axios = require("axios");

const httpRequest = axios.create({
  baseURL: "http://localhost:3001/api/",
});

const get = async (path) => {
  const response = await httpRequest.get(path);
  return response.data;
};

const post = async (path, data) => {
  const response = await httpRequest.post(path, data);
  return response.data;
};

const put = async (path, data) => {
  const response = await httpRequest.put(path, data);
  return response.data;
};

const del = async (path) => {
  const response = await httpRequest.delete(path);
  return response.data;
};

const patch = async (path, data) => {
  const response = await httpRequest.patch(path, data);
  return response.data;
};

module.exports = { get, post, put, del, patch };
