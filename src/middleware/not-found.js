const notFound = (request, response, next) => {
  response.status(404).json({
    message: `Route to ${request.method} ${request.originalUrl} not found`
  });

  next && next();
}

module.exports = notFound;
