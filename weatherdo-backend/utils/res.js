export const successHandler = (req, res, data, statusCode = 200) => {
  const { method, url, ip, headers } = req;
  const timestamp = new Date().toISOString();
  const userAgent = headers["user-agent"];

  console.log(
    `Success - [${timestamp}] ${method} ${url} - IP: ${ip} - User-Agent: ${userAgent}`
  );

  res.status(statusCode).json({
    success: true,
    data,
  });
};

export const errorHandler = (req, res, error, statusCode = 500) => {
  const { method, url, ip, headers } = req;
  const timestamp = new Date().toISOString();
  const userAgent = headers["user-agent"];

  console.error(
    `Error - [${timestamp}] ${method} ${url} - IP: ${ip} - User-Agent: ${userAgent} - ${error}`
  );

  res.status(statusCode).json({
    success: false,
    error,
  });
};
