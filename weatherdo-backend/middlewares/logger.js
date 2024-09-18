export const logger = (req, res, next) => {
  const timestamp = new Date().toISOString();
  const method = req.method;
  const url = req.url;
  const ip = req.ip || req.connection.remoteAddress;
  const userAgent = req.get("User-Agent") || "Unknown";

  console.log(
    `Request - [${timestamp}] ${method} ${url} - IP: ${ip} - User-Agent: ${userAgent}`
  );

  next();
};
