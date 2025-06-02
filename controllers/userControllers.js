const bcrypt = require('bcryptjs');

const users = [
  {
    id: 1,
    name: 'Willy Rahma',
    username: 'willyrahma',
    password: bcrypt.hashSync('password123', 10),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }
];

exports.getUsers = (req, res) => {
  res.json(users);
};

exports.getUserById = (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  res.json(user);
};


