import winston from "winston";

const logger = winston.createLogger({
  level: "info",
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      filename: "logs/requests.log",
    }),
  ],
});

/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 */
const globalLogger = (req, res, next) => {
  res.on("finish", () => {
    logger.info("Request", {
      method: req.method,
      url: req.originalUrl,
      statusCode: res.statusCode,
      body: req.body,
    });
  });
  next();
};

export default logger;

export { globalLogger };
