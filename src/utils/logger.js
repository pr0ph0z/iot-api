const { createLogger, transports, format } = require("winston");

const logger = createLogger({
  transports: [new transports.Console()],
  format: format.combine(
    format.colorize(),
    format.timestamp(),
    format.printf(({ timestamp, level, message, ...metadata }) => {
      return `[${timestamp}] ${level}: ${message} ${
        Object.keys(metadata).length !== 0 ? JSON.stringify(metadata) : ""
      }`;
    })
  )
});

module.exports = logger;
