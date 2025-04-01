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

  test("Obtener TODOS", async () => {
    const response = await request.get("/api/todos").send();
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("todos");
    expect(response.body.todos).toBeInstanceOf(Array);
    expect(response.body.todos.length).toBe(0);
    await request.post("/api/todos").send({
      title: "TODO TEST TITLE",
    });
    const response2 = await request.get("/api/todos").send();
    expect(response2.statusCode).toBe(200);
    expect(response2.body).toHaveProperty("todos");
    expect(response2.body.todos).toBeInstanceOf(Array);
    expect(response2.body.todos.length).toBe(1);
    expect(response2.body.todos[0]).toHaveProperty("_id");
    expect(response2.body.todos[0]).toHaveProperty("title");
    expect(response2.body.todos[0]).toHaveProperty("done");
    expect(response2.body.todos[0].title).toBe("TODO TEST TITLE");
    expect(response2.body.todos[0].done).toBe(false);

  }
)
});
