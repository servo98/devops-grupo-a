import { cleanDB, connectDB, stopDB } from "./database.js";
import request from "./supertest.js";
import {
  describe,
  test,
  expect,
  beforeAll,
  afterEach,
  afterAll,
} from "@jest/globals";

beforeAll(async () => {
  //Conectarnos a la db
  await connectDB();
});

afterEach(async () => {
  // limpiar db
  await cleanDB();
});

afterAll(async () => {
  // detener la db
  await stopDB();
});

describe("POST /api/todos", () => {
  test("Crear un TODO", async () => {
    const response = await request.post("/api/todos").send({
      title: "TODO TEST TITLE",
    });
    expect(response.statusCode).toBe(200);
  });

  /**
   * Crear un test llamado Get all todos y verificar que te regrese un statuscode 200
   */
});
