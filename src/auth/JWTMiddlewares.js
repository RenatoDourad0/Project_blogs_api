require('dotenv/config');
const jwt = require('jsonwebtoken');
const { userService } = require('../services');

const secret = process.env.JWT_SECRET;

const authenticate = async (req, res) => {
  const { email, password } = req.body;
  try {
    const { type, message: user } = await userService.getByEmail(email);
    if (type !== null || user.password !== password) {
      return res.status(400).json({ message: 'Invalid fields' }); 
    }

    const jwtConfig = {
      expiresIn: '7d',
      algorithm: 'HS256',
    };
    const token = jwt.sign({ data: { id: user.id, username: user.username } }, secret, jwtConfig);
    if (req.login) return res.status(200).json({ token });
    return res.status(201).json({ token });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const validate = async (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    const decoded = jwt.verify(token, secret);
    const { type, message } = await userService.getById(decoded.data.id);
    if (type === null) {
      req.user = message;
      next();
    }
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  authenticate,
  validate,
};