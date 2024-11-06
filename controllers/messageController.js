const Messages = require('../models/Messages');

module.exports = {
  get(req, res) {
    res.render('form', { title: 'New message' });
  },
  async post(req, res) {
    const { username, text } = req.body;
    const newData = {
      username,
      text,
      added: new Date().toISOString().split('T')[0],
    };
    const result = await Messages.save(newData);
    if (result) {
      res.redirect('/');
    } else {
      res.status(500).send('Could not add new data');
    }
  },
};
