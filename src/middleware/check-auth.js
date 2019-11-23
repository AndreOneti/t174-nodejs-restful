const checkAuth = (request, response, next) => {
  const token = request.headers.authorization;
  if (/ZG0xMjQ6YWx1bm9pbmF0ZWw=/.test(token)) {
    next();
  } else {
    response.status(401).json({
      message: '“You Shall Not Pass!” - White, Gandalf the',
      status: 401
    });
  }
};

module.exports = checkAuth;
