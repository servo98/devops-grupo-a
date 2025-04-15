import config from "../config/index.js";
import CustomError from "./CustomError.js";
import logger from "./logger.js";

/**
 *
 * @param {*} err
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} _next
 */
const errorHandler = (err, req, res, _next) => {
  /**
   * Qué error está llegando
   * Si es unn error nuestro, lo manejamos
   * Si no, verificamos en qué ambientes estamos
   * Si es prod regresamos 500 Server error
   * Si no es prod, regresamos el error
   */

  if (err instanceof CustomError) {
    res.status(err.statusCode).json({
      message: err.message,
      code: err.code,
      stack: config.ENV !== "production" ? err.stack : undefined,
    });
  } else {
    logger.error("UNKNOWN ERROR", {
      body: req.body,
      headers: req.headers,
      params: req.params,
    });
    res.status(500).json({
      message: "Internal Server Error",
      code: "INTERNAL_SERVER_ERROR",
      error: err.message,
      stack: config.ENV !== "production" ? err.stack : undefined,
    });
  }
};

export default errorHandler;
