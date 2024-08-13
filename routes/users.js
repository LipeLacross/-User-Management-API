const express = require('express');
const router = express.Router();
const User = require('../models/user');  // Importa o modelo User

// GET /users - List all users
router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    next(err);
  }
});

// POST /users - Create a new user
router.post('/', async (req, res, next) => {
  const { name, email, password } = req.body;
  try {
    const user = await User.create({ name, email, password });
    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
});

// GET /users/:id - Get a user by ID
router.get('/:id', async (req, res, next) => {
  const userId = req.params.id;
  try {
    const user = await User.findByPk(userId);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (err) {
    next(err);
  }
});

// PUT /users/:id - Update a user by ID
router.put('/:id', async (req, res, next) => {
  const userId = req.params.id;
  const { name, email, password } = req.body;
  try {
    const user = await User.findByPk(userId);
    if (!user) return res.status(404).json({ message: 'User not found' });
    user.name = name;
    user.email = email;
    user.password = password;
    await user.save();
    res.json(user);
  } catch (err) {
    next(err);
  }
});

// DELETE /users/:id - Delete a user by ID
router.delete('/:id', async (req, res, next) => {
  const userId = req.params.id;
  try {
    const user = await User.findByPk(userId);
    if (!user) return res.status(404).json({ message: 'User not found' });
    await user.destroy();
    res.json({ message: 'User deleted' });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
