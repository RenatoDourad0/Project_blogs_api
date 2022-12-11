const isDataValid = (email, password) => email && password;

const login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    if (!isDataValid(email, password)) {
      return res.status(400).json({ message: 'Some required fields are missing' });
    }
    req.login = true;
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  login,
};