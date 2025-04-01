import supertest from "supertest";
import api from "../src/api.js";

const request = supertest(api);

export default request;
