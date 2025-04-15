export default class CustomError extends Error {
  constructor(message, statusCode, code) {
    super(message);
    this.statusCode = statusCode;
    this.code = code;
  }
}

const ERRORS = {
  NOT_FOUND: new CustomError("Recurso no encontrado", 404, "NOT_FOUND"),
  SYNTAX_ERROR: new CustomError("Body mal formado", 400, "SYNTAX_ERROR"),
};

export { ERRORS };
